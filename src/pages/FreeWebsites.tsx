import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, X } from "lucide-react";
import SEO from "@/components/utils/SEO";
import WavyUnderline from "@/components/shared/WavyUnderline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/branding/eyelevel-logo-color-new.png";
import {
  APPLY_WEBHOOK_URL,
  DELIVERABLES,
  FAQS,
  HASHTAG,
  SOCIAL_HANDLE,
  SPOTS,
  STEPS,
  daysLeft,
  deadlineLabel,
} from "@/data/freeWebsites";

const applySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  startup: z.string().trim().min(1, "Startup name is required").max(100),
  postLink: z
    .string()
    .trim()
    .min(1, "Post link is required")
    .url("Paste the full link to your post"),
  need: z.string().trim().min(1, "Tell us in one line").max(280),
});

type ApplyFormData = z.infer<typeof applySchema>;

const FreeWebsites = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const remaining = daysLeft();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplyFormData>({ resolver: zodResolver(applySchema) });

  const onSubmit = async (data: ApplyFormData) => {
    // The webhook is filled in once the n8n workflow exists; until then, say so
    // rather than posting into the void and reporting success.
    if (!APPLY_WEBHOOK_URL) {
      toast({
        title: "Applications aren't open yet",
        description: `Post with ${HASHTAG} and we'll pick it up.`,
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(APPLY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, campaign: "3-websites-free" }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.ok === false)) {
        throw new Error(result?.message || "Failed to submit");
      }

      setSubmitted(true);
      toast({
        title: "You're in.",
        description: "We'll be in touch. Now go get your network behind you.",
      });
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again, or email us directly.",
        variant: "destructive",
      });
    }
  };

  const fieldClass =
    "w-full rounded-xl border-2 border-background/15 bg-card px-4 py-3 font-bricolage text-background placeholder:text-brand-black/35 focus:border-background focus:outline-none";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="3 Free Websites for Startups | Eyelevel Growth Studio"
        description="We're building 3 real websites for 3 real startups, for free. No funding round, no discount code. Apply publicly, get your network behind you, and we'll pick the final three."
        keywords={[
          "free website for startups",
          "free startup website design",
          "startup website giveaway India",
          "free web design Chennai",
        ]}
        canonical="https://theeyelevelstudio.com/3-websites-free"
        url="https://theeyelevelstudio.com/3-websites-free"
      />

      {/* Logo only — this is a campaign page, nothing to navigate away to */}
      <header className="px-5 pt-8 md:px-10">
        <img
          src={logo}
          alt="Eyelevel Growth Studio"
          className="h-12 w-auto md:h-14"
        />
      </header>

      {/* HERO */}
      <section className="px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-bricolage text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            {SPOTS} spots · {remaining} days left
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-7 font-dela text-4xl uppercase leading-[1.05] text-primary md:text-6xl lg:text-7xl"
          >
            We're building 3 websites.{" "}
            <WavyUnderline color="hsl(var(--primary))">For free.</WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto mt-8 max-w-[54ch] font-bricolage text-lg leading-relaxed text-foreground/75 md:text-xl"
          >
            No funding round. No discount code. Just 3 real startups getting a
            real website, on us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-11"
          >
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bricolage font-semibold text-primary-foreground transition hover:brightness-95"
            >
              See if you qualify
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-card px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-[24ch] font-dela text-3xl uppercase leading-tight text-background md:text-4xl">
            A full website. Designed, built, and launched.
          </h2>
          <p className="mt-5 max-w-[60ch] font-bricolage text-lg text-brand-black/65">
            Not a template with your logo slapped on it.
          </p>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <li
                key={d.title}
                className="rounded-2xl border-2 border-background/10 bg-background/[0.03] p-6"
              >
                <Check className="h-5 w-5 text-background" strokeWidth={3} />
                <h3 className="mt-4 font-bricolage font-semibold text-background">
                  {d.title}
                </h3>
                <p className="mt-1.5 font-bricolage text-sm leading-relaxed text-brand-black/60">
                  {d.detail}
                </p>
              </li>
            ))}
          </ul>

          {/* The honest exclusion, stated plainly rather than buried */}
          <div className="mt-10 flex gap-4 rounded-2xl border-2 border-background/15 bg-background/[0.04] p-6 md:p-8">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-background" strokeWidth={3} />
            <div>
              <h3 className="font-bricolage font-semibold text-background">
                What this isn't: an e-commerce store
              </h3>
              <p className="mt-2 max-w-[70ch] font-bricolage leading-relaxed text-brand-black/65">
                If you're selling products online and need a cart, checkout, and
                inventory system, this specific build isn't the right fit this
                round — we'll tell you honestly rather than string you along.
                Everything else — service businesses, SaaS, apps, content
                platforms — we want to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CATCH */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-4xl">
            The catch
          </h2>
          <p className="mt-5 max-w-[60ch] font-bricolage text-lg text-foreground/70">
            Here's exactly what it takes to win. No fine print, no surprise later.
          </p>

          <ol className="mt-12 space-y-5">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-5 rounded-2xl border border-foreground/15 p-6 md:gap-7 md:p-8"
              >
                <span className="font-dela text-3xl leading-none text-primary md:text-4xl">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bricolage text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[68ch] font-bricolage leading-relaxed text-foreground/65">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl bg-primary/10 p-6 md:p-8">
            <h3 className="font-bricolage font-semibold text-primary">
              The trade, made honest
            </h3>
            <p className="mt-2 max-w-[70ch] font-bricolage leading-relaxed text-foreground/75">
              In exchange for the free build, winners agree to be a public case
              study — before and after, our process documented, your honest word
              on how it went. That's the actual cost. It's not cash, it's proof.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DOING THIS */}
      <section className="bg-secondary px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-4xl">
            Why we're doing this
          </h2>
          <blockquote className="mt-8 space-y-6 font-bricolage text-lg leading-relaxed text-foreground/80 md:text-xl">
            <p>
              I've sat on the other side of the marketing table. I know what it's
              like to need a website and not have the budget for one yet.
            </p>
            <p>
              We built EyeLevel to be the team we always wished we could hire.
              This is us putting that where our mouth is — real work, for real
              startups, out in the open.
            </p>
          </blockquote>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section id="apply" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-4xl">
              How to apply
            </h2>

            <ol className="mt-9 space-y-6">
              <li className="font-bricolage leading-relaxed text-foreground/75">
                <span className="font-semibold text-foreground">
                  Post publicly
                </span>{" "}
                about your startup and why you need a website. Tag{" "}
                <span className="text-primary">{SOCIAL_HANDLE}</span>, use{" "}
                <span className="text-primary">{HASHTAG}</span>.
              </li>
              <li className="font-bricolage leading-relaxed text-foreground/75">
                <span className="font-semibold text-foreground">
                  Submit your post link
                </span>{" "}
                using the form here.
              </li>
              <li className="font-bricolage leading-relaxed text-foreground/75">
                <span className="font-semibold text-foreground">
                  Share this page
                </span>{" "}
                with your network. Every vote counts.
              </li>
            </ol>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-foreground/15 pt-8">
              {[
                { k: "Deadline", v: deadlineLabel() },
                { k: "Spots", v: String(SPOTS) },
                { k: "Cost to you", v: "Zero" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-bricolage text-[0.68rem] uppercase tracking-[0.12em] text-foreground/45">
                    {s.k}
                  </dt>
                  <dd className="mt-1.5 font-bricolage font-semibold text-primary">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-bricolage text-sm text-foreground/50">
              Plus your honest story once it's built.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-card p-7 md:p-10">
            {submitted ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background">
                  <Check className="h-6 w-6 text-card" strokeWidth={3} />
                </span>
                <h3 className="mt-6 font-dela text-2xl uppercase text-background">
                  You're in
                </h3>
                <p className="mt-3 max-w-[36ch] font-bricolage text-brand-black/60">
                  Now go get your network behind you. That's what gets you
                  shortlisted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="fw-name"
                    className="font-bricolage text-sm font-semibold text-background"
                  >
                    Your name
                  </label>
                  <input
                    id="fw-name"
                    {...register("name")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-bricolage text-sm text-red-700">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="fw-startup"
                    className="font-bricolage text-sm font-semibold text-background"
                  >
                    Startup
                  </label>
                  <input
                    id="fw-startup"
                    {...register("startup")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="What it's called"
                  />
                  {errors.startup && (
                    <p className="mt-1.5 font-bricolage text-sm text-red-700">
                      {errors.startup.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="fw-post"
                    className="font-bricolage text-sm font-semibold text-background"
                  >
                    Post link
                  </label>
                  <input
                    id="fw-post"
                    {...register("postLink")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="https://linkedin.com/posts/..."
                  />
                  {errors.postLink && (
                    <p className="mt-1.5 font-bricolage text-sm text-red-700">
                      {errors.postLink.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="fw-need"
                    className="font-bricolage text-sm font-semibold text-background"
                  >
                    One line on what you need
                  </label>
                  <textarea
                    id="fw-need"
                    rows={3}
                    {...register("need")}
                    className={`mt-2 resize-none ${fieldClass}`}
                    placeholder="We're launching in September and have nothing to point people at."
                  />
                  {errors.need && (
                    <p className="mt-1.5 font-bricolage text-sm text-red-700">
                      {errors.need.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-4 font-bricolage font-semibold text-card transition hover:brightness-110 disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit my application"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-dela text-3xl uppercase leading-tight text-background md:text-4xl">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="mt-9">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border-background/12"
              >
                <AccordionTrigger className="text-left font-bricolage font-semibold text-background hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-bricolage leading-relaxed text-brand-black/65">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-20 text-center md:px-10 md:py-24">
        <p className="mx-auto max-w-[52ch] font-dela text-xl uppercase leading-snug text-primary md:text-2xl">
          {SPOTS} spots. {remaining} days left. Not e-commerce. Everything else,
          we want to hear from you.
        </p>
        <a
          href="#apply"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bricolage font-semibold text-primary-foreground transition hover:brightness-95"
        >
          Apply now
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-12 font-bricolage text-sm text-foreground/40">
          © {new Date().getFullYear()} Eyelevel Growth Studio
        </p>
      </footer>
    </div>
  );
};

export default FreeWebsites;
