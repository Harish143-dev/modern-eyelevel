/**
 * Everything the "3 Websites. For Free." campaign page needs that is likely to
 * change while the campaign runs. Edit here rather than in the page.
 */

/** Applications close at the end of this day (IST). Format: YYYY-MM-DD. */
export const DEADLINE = "2026-08-07";

export const SPOTS = 3;

export const SOCIAL_HANDLE = "@EyeLevel";
export const HASHTAG = "#3WebsitesFree";

/**
 * Where the apply form posts. Create the n8n workflow, activate it, and paste
 * the production URL here — note it must be the `/webhook/` path, not
 * `/webhook-test/`, which only accepts data while the editor is listening.
 */
export const APPLY_WEBHOOK_URL = "https://automate.eyelevelstudio.in/webhook/3aeb3331-2651-441c-9f53-fed96ad901a4";

/** Days remaining, floored at 0 so a passed deadline never shows a negative. */
export const daysLeft = (from: Date = new Date()): number => {
  const end = new Date(`${DEADLINE}T23:59:59+05:30`).getTime();
  const start = from.getTime();
  return Math.max(0, Math.ceil((end - start) / 86_400_000));
};

export const deadlineLabel = (): string =>
  new Date(`${DEADLINE}T23:59:59+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

export type Deliverable = { title: string; detail: string };

export const DELIVERABLES: Deliverable[] = [
  { title: "Homepage", detail: "Designed around what you actually sell." },
  { title: "Up to 5 pages", detail: "Whatever the story needs, not a fixed template." },
  { title: "Mobile responsive", detail: "Built for the screen most of your traffic uses." },
  { title: "One round of revisions", detail: "You tell us what's off, we fix it." },
  { title: "Live within 3 weeks", detail: "Three weeks from selection, yours to keep." },
];

export type Step = { title: string; body: string };

export const STEPS: Step[] = [
  {
    title: "You apply publicly, not privately",
    body: `Post about your startup and why you need a website, on LinkedIn or Instagram. Tag ${SOCIAL_HANDLE}, use ${HASHTAG}.`,
  },
  {
    title: "You go get people to back you",
    body: "We're watching every public application. The louder your own network backs you, the more likely you get shortlisted.",
  },
  {
    title: "We personally pick the final 3",
    body: "From the shortlist, our team picks the 3 startups we're most excited to build for — not just a popularity contest.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "I'm pre-revenue, can I still apply?",
    a: "Yes. Stage doesn't matter, need does. If you don't have a website yet and you're actively building your startup, you're eligible.",
  },
  {
    q: "I already have a website, but it's bad. Can I apply?",
    a: "Yes. \"We need a real one\" counts whether you have nothing right now or something that isn't working.",
  },
  {
    q: "What happens if I don't win?",
    a: "You're still on our radar. A lot of what EyeLevel does starts with exactly this kind of conversation — this campaign is often just the first one.",
  },
  {
    q: "Can I apply if my startup is e-commerce?",
    a: "Not for this round. This build isn't set up for cart, checkout, and inventory. Everything else is eligible.",
  },
  {
    q: "Do I have to keep posting after I apply?",
    a: "No, but sharing your application link with your own network is what actually gets you shortlisted. It's not required, but it's how you win.",
  },
];
