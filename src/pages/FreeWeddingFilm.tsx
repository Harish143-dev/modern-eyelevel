import { useRef, useState } from "react";
import SEO from "@/components/utils/SEO";
import heroImg from "@/assets/content/free-wedding-film/hero.webp";
import eyelevelLogo from "@/assets/branding/eyelevel-logo-color-new.png";
import s from "./FreeWeddingFilm.module.css";

/*
 * AI wedding-film application page — a link-only campaign page.
 *
 * It is a 3-step wizard (About you / Story / Concept) but a SINGLE <form>:
 * nothing is submitted per-step. All three fieldsets stay mounted so their
 * values persist across steps; only the current one is visible. Validation is
 * done manually per step with the browser's own reportValidity, so the form
 * carries noValidate and the hidden steps never block submission.
 *
 * Submission posts JSON to n8n, matching the site's other forms. Set
 * APPLY_WEBHOOK_URL to the PRODUCTION /webhook/ URL (not /webhook-test/) and
 * set Allowed Origins (CORS) on the n8n Webhook node to
 * https://theeyelevelstudio.com, or the browser blocks the cross-origin call.
 *
 * The page is intentionally kept out of the sitemap and marked noindex — it is
 * reachable only by people who are sent the link.
 */
const APPLY_WEBHOOK_URL = "https://automate.eyelevelstudio.in/webhook/free-shoots";

const STEPS = [
  { title: "About you", sub: "Tell us who you are" },
  { title: "Story", sub: "Your journey together" },
  { title: "Concept", sub: "Your film idea" },
];

const IconBase = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <svg className={s.icon} viewBox="0 0 24 24" style={style}>
    {children}
  </svg>
);

const InstagramIcon = () => (
  <IconBase style={{ width: 17, height: 17 }}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" />
  </IconBase>
);

const FreeWeddingFilm = () => {
  const [agreed, setAgreed] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lockShake, setLockShake] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);

  const isLast = step === STEPS.length - 1;

  const unlock = () => {
    if (!agreed) {
      setLockShake(true);
      setTimeout(() => setLockShake(false), 900);
      return;
    }
    setUnlocked(true);
    setTimeout(
      () => wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0
    );
  };

  /** Validate only the visible step, using native bubbles, before advancing. */
  const currentStepValid = () => {
    const fs = formRef.current?.querySelector<HTMLFieldSetElement>(
      `fieldset[data-step="${step}"]`
    );
    if (!fs) return true;
    const invalid = fs.querySelector<HTMLInputElement>(":invalid");
    if (invalid) {
      invalid.reportValidity();
      invalid.focus();
      return false;
    }
    return true;
  };

  const goToStep = (next: number) => {
    setStep(next);
    window.scrollTo({
      top: (wizardRef.current?.offsetTop ?? 0) - 20,
      behavior: "smooth",
    });
  };

  const onContinue = () => {
    if (!currentStepValid()) return;
    if (!isLast) {
      goToStep(step + 1);
    } else {
      formRef.current?.requestSubmit();
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    if (!currentStepValid()) return;

    setSubmitting(true);
    const payload: Record<string, string> = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as Record<string, string>;
    payload.terms_agreed = "on";
    payload.campaign = "ai-wedding-film";

    try {
      if (APPLY_WEBHOOK_URL) {
        const res = await fetch(APPLY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await res.json().catch(() => null);
        if (!res.ok || (result && result.ok === false)) {
          throw new Error(result?.message || "Failed to submit");
        }
      } else {
        // No endpoint wired yet — don't pretend to send, but let the couple
        // reach the success state so the page is testable.
        console.warn("APPLY_WEBHOOK_URL not set. Submission was not sent.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitting(false);
      alert("Something went wrong submitting. Please try again or reach us directly.");
    }
  };

  return (
    <div className={s.page}>
      <SEO
        title="Apply — Free AI Wedding Film | Eyelevel Growth Studio"
        description="Eyelevel is picking a few couples for our first AI-generated wedding films. Free, real story, real photos, one cinematic film."
        canonical="https://theeyelevelstudio.com/free-wedding-film"
        url="https://theeyelevelstudio.com/free-wedding-film"
        noindex
      />

      <div className={s.wrap}>
        {/* HERO */}
        <div className={s.heroBanner}>
          <img src={heroImg} alt="" onError={(e) => e.currentTarget.remove()} />
          <div className={s.heroContent}>
            <img
              src={eyelevelLogo}
              alt="Eyelevel Growth Studio"
              className={s.heroLogo}
            />
            <div className={s.heroCopy}>
              <h1>
                Apply for a free
                <br />
                <span className={s.accent}>AI wedding film</span>
              </h1>
              <p className={s.lede}>
                We're making short, cinematic wedding films with AI — real
                photos, real stories, real people. This is an application-only
                pilot.
              </p>
              <div className={s.heroDash} />
            </div>
          </div>
          <div className={s.statsCard}>
            <div className={s.scTitle}>This round</div>
            <div className={s.scRow}>
              <span className={s.scIcon}>
                <IconBase>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </IconBase>
              </span>
              <div>
                <div className={s.scValue}>3</div>
                <div className={s.scLabel}>Selected couples</div>
              </div>
            </div>
            <div className={s.scRow}>
              <span className={s.scIcon}>₹</span>
              <div>
                <div className={s.scValue}>₹0</div>
                <div className={s.scLabel}>Cost</div>
              </div>
            </div>
            <div className={s.scRow}>
              <span className={s.scIcon}>
                <IconBase>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </IconBase>
              </span>
              <div>
                <div className={s.scValue}>Rolling</div>
                <div className={s.scLabel}>Review</div>
              </div>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className={s.success}>
            <h2>Application received</h2>
            <p>
              Thank you. We've also sent a confirmation to your email. If you're
              shortlisted, we'll reach out on WhatsApp and ask for at least 30
              photos each of the bride and groom — no need to send anything now.
            </p>
          </div>
        ) : (
          <form id="applyForm" ref={formRef} onSubmit={onSubmit} noValidate>
            {/* BEFORE WE BEGIN */}
            <div className={s.begin}>
              <div className={s.sectitle}>Before we begin</div>
              <p className={s.subtext}>A quick heads-up about this project.</p>

              <div className={s.beginCardWrap}>
                <div className={s.beginGrid}>
                  <div>
                    <div className={s.bcIcon}>
                      <IconBase>
                        <path d="M3 8.5 20 8.5" />
                        <path d="m4 4 3 4.5" />
                        <path d="m10 4 3 4.5" />
                        <path d="m16 4 3 4.5" />
                        <rect x="3" y="8.5" width="18" height="11.5" rx="2" />
                      </IconBase>
                    </div>
                    <div className={s.bcTitle}>Promotional project</div>
                    <p className={s.bcDesc}>
                      Your photos, videos, story and the final film may be used
                      to showcase our AI video capabilities.
                    </p>
                  </div>
                  <div>
                    <div className={s.bcIcon}>
                      <IconBase>
                        <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V6l-3 5H5a2 2 0 0 0-2 2Z" />
                        <path d="M14 8a4 4 0 0 1 0 8" />
                        <path d="M18 5a8 8 0 0 1 0 14" />
                      </IconBase>
                    </div>
                    <div className={s.bcTitle}>Marketing permission</div>
                    <p className={s.bcDesc}>
                      By applying, you agree that EyeLevel may share your content
                      across our website, social media and other marketing
                      channels.
                    </p>
                  </div>
                  <div>
                    <div className={s.bcIcon}>
                      <IconBase>
                        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
                        <path d="m9 12 2 2 4-4" />
                      </IconBase>
                    </div>
                    <div className={s.bcTitle}>Selection is our call</div>
                    <p className={s.bcDesc}>
                      Selection depends on your concept and material. Applying
                      does not guarantee selection.
                    </p>
                  </div>
                </div>

                <div className={s.consentRow}>
                  <div className={s.left}>
                    <input
                      type="checkbox"
                      id="gateAgree"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label htmlFor="gateAgree">
                      I've read this and I agree. Unlock my application.
                    </label>
                  </div>
                  <span className={s.requiredTag}>Required</span>
                </div>

                {!unlocked && (
                  <>
                    <button
                      type="button"
                      className={`${s.unlockBtn} ${agreed ? s.active : ""}`}
                      onClick={unlock}
                    >
                      <IconBase>
                        <rect x="4" y="10" width="16" height="10" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                      </IconBase>
                      Unlock application
                    </button>
                    <div
                      className={s.lockedNote}
                      style={lockShake ? { color: "var(--danger)" } : undefined}
                    >
                      <IconBase>
                        <rect x="4" y="10" width="16" height="10" rx="2" />
                        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                      </IconBase>
                      Agree to the above to continue.
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* WIZARD — all fieldsets stay mounted; only the active one shows */}
            {unlocked && (
              <div className={s.wizardWrap} ref={wizardRef}>
                <div className={s.wizard}>
                  <div className={s.stepsNav}>
                    {STEPS.map((st, i) => (
                      <div key={st.title} style={{ display: "contents" }}>
                        {i > 0 && <div className={s.stepConnector} />}
                        <div
                          className={`${s.stepItem} ${
                            i === step ? s.active : i < step ? s.done : ""
                          }`}
                        >
                          <div className={s.stepNum}>{i + 1}</div>
                          <div className={s.stepText}>
                            <div className={s.stepTitle}>{st.title}</div>
                            <div className={s.stepSub}>{st.sub}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={s.stepBody}>
                    <fieldset
                      data-step={0}
                      className={step === 0 ? "" : s.hidden}
                    >
                      <div className={s.stepHead}>
                        <h3>About you</h3>
                        <p>Tell us a bit about you both.</p>
                      </div>
                      <div className={s.row}>
                        <div className={s.field}>
                          <label htmlFor="partner1">
                            Partner 1 full name<span className={s.req}>*</span>
                          </label>
                          <input
                            type="text"
                            id="partner1"
                            name="partner1_name"
                            placeholder="Enter full name"
                            required
                          />
                        </div>
                        <div className={s.field}>
                          <label htmlFor="partner2">
                            Partner 2 full name<span className={s.req}>*</span>
                          </label>
                          <input
                            type="text"
                            id="partner2"
                            name="partner2_name"
                            placeholder="Enter full name"
                            required
                          />
                        </div>
                      </div>
                      <div className={s.row}>
                        <div className={s.field}>
                          <label htmlFor="phone">
                            WhatsApp / phone number<span className={s.req}>*</span>{" "}
                            <span className={s.hint}>(with country code)</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="e.g. +91 98765 43210"
                            required
                          />
                        </div>
                        <div className={s.field}>
                          <label htmlFor="email">
                            Email address<span className={s.req}>*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className={s.row}>
                        <div className={s.field}>
                          <label htmlFor="city">
                            City<span className={s.req}>*</span>
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <div className={s.field}>
                          <label htmlFor="wdate">
                            Wedding date<span className={s.req}>*</span>
                          </label>
                          <input type="date" id="wdate" name="wedding_date" required />
                        </div>
                      </div>
                      <div className={s.row}>
                        <div className={s.field}>
                          <label htmlFor="instaBride">
                            Bride's Instagram handle{" "}
                            <span className={s.hint}>(optional)</span>
                          </label>
                          <div className={s.fieldIconWrap}>
                            <span className={s.fi}>
                              <InstagramIcon />
                            </span>
                            <input
                              type="text"
                              id="instaBride"
                              name="instagram_bride"
                              placeholder="@handle"
                            />
                          </div>
                        </div>
                        <div className={s.field}>
                          <label htmlFor="instaGroom">
                            Groom's Instagram handle{" "}
                            <span className={s.hint}>(optional)</span>
                          </label>
                          <div className={s.fieldIconWrap}>
                            <span className={s.fi}>
                              <InstagramIcon />
                            </span>
                            <input
                              type="text"
                              id="instaGroom"
                              name="instagram_groom"
                              placeholder="@handle"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset
                      data-step={1}
                      className={step === 1 ? "" : s.hidden}
                    >
                      <div className={s.stepHead}>
                        <h3>Your story</h3>
                        <p>Tell us about your day, and why we should pick you.</p>
                      </div>
                      <div className={s.field}>
                        <label htmlFor="story">
                          Tell us about your day, or your journey together
                          <span className={s.req}>*</span>{" "}
                          <span className={s.hint}>(100-150 words)</span>
                        </label>
                        <textarea id="story" name="their_story" required />
                      </div>
                      <div className={s.field}>
                        <label htmlFor="why">
                          Why should we pick you<span className={s.req}>*</span>
                        </label>
                        <textarea id="why" name="why_pick_us" required />
                      </div>
                      <div className={s.field}>
                        <label htmlFor="source">
                          How did you hear about this{" "}
                          <span className={s.hint}>(optional)</span>
                        </label>
                        <select id="source" name="source" defaultValue="">
                          <option value="">Select one</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="instagram">Instagram</option>
                          <option value="friend">A friend</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </fieldset>

                    <fieldset
                      data-step={2}
                      className={step === 2 ? "" : s.hidden}
                    >
                      <div className={s.stepHead}>
                        <h3>Your concept</h3>
                        <p>How do you imagine this film.</p>
                      </div>
                      <div className={s.field}>
                        <label htmlFor="concept">
                          Style, mood, the moments you want captured
                          <span className={s.req}>*</span>
                        </label>
                        <textarea
                          id="concept"
                          name="concept_idea"
                          placeholder="e.g. something slow and cinematic that opens on our first look, or a fun highlight reel set to the song we danced to..."
                          required
                        />
                      </div>
                      <p className={s.noteSmall}>
                        We're picking the strongest concepts, not just the
                        strongest photos. If you're shortlisted, we'll ask for at
                        least 30 photos each of the bride and groom then — you
                        don't need to gather anything yet.
                      </p>
                    </fieldset>
                  </div>
                </div>

                {/* Collapsed rows for the other steps */}
                <div className={s.collapsedList}>
                  {STEPS.map((st, i) =>
                    i === step ? null : (
                      <button
                        type="button"
                        key={st.title}
                        className={s.stepCollapsed}
                        onClick={() => goToStep(i)}
                      >
                        <div className={s.scLeft}>
                          <div className={s.stepNum}>{i + 1}</div>
                          <div className={s.stepText}>
                            <div className={s.stepTitle}>{st.title}</div>
                            <div className={s.stepSub}>{st.sub}</div>
                          </div>
                        </div>
                        <span className={s.chev}>
                          <IconBase>
                            <path d="M9 6l6 6-6 6" />
                          </IconBase>
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </form>
        )}
      </div>

      {/* STICKY BOTTOM BAR */}
      {unlocked && !submitted && (
        <div className={s.stickyBar}>
          <div className={s.sbRow}>
            <div className={s.sbLeft}>
              <div className={s.sbStep}>
                Step {step + 1} of {STEPS.length}
              </div>
              <div className={s.sbTitle}>{STEPS[step].title}</div>
            </div>
            <div className={s.sbHint}>Fill the required fields (*) to continue.</div>
            <div className={s.sbRight}>
              <div className={s.dots}>
                {STEPS.map((st, i) => (
                  <span
                    key={st.title}
                    className={`${s.dot} ${i <= step ? s.on : ""}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className={s.continueBtn}
                onClick={onContinue}
                disabled={submitting}
              >
                {submitting
                  ? "Submitting…"
                  : isLast
                    ? "Submit application"
                    : "Save & continue"}
                {!submitting && (
                  <IconBase>
                    <path d="M9 6l6 6-6 6" />
                  </IconBase>
                )}
              </button>
            </div>
          </div>
          <div className={s.progressTrack}>
            <div
              className={s.progressFill}
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeWeddingFilm;
