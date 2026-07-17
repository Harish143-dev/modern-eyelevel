import { normalizeTextDeep } from "@/lib/text";

export type OpenPosition = {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  slug: string;
};

export type JobListing = {
  title: string;
  department: string;
  type: string;
  location: string;
  datePosted: string;
  experience: string;
  shortDescription: string;
  aboutCompany: string;
  responsibilities: string[];
  requirements: string[];
  qualities: string[];
  whatYouGet?: string[];
  benefits: string[];
};

export const titleToSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

const rawOpenPositions = [
  {
    title: "Video Editor",
    department: "Video Production",
    type: "Full-time · On-site",
    location: "Chennai, India",
    description:
      "Cut Reels, Shorts, and short-form video that actually performs.",
  },
  {
    title: "Social Media Manager Intern",
    department: "Digital Marketing",
    type: "Full-time · Internship",
    location: "Chennai, India",
    description:
      "Own the content calendar and client relationship for real brands.",
  },
] satisfies Array<Omit<OpenPosition, "slug">>;

const rawJobListings: Record<string, JobListing> = {
  "video-editor": {
    title: "Video Editor",
    department: "Video Production",
    type: "Full-time · On-site",
    location: "Chennai, India",
    datePosted: "17/07/2026",
    experience: "1–3 years",
    shortDescription:
      "Cut Reels, Shorts, and short-form video that actually performs.",
    aboutCompany: `EyeLevel was not built by an agency chasing clients. It was built by a marketing head who spent 15 years hiring agencies, and knowing exactly what they failed to deliver.

We're not your agency. We're your extended marketing team — one studio, full stack, zero handoffs, working across sports, healthcare, real estate, IT/SaaS, and automotive brands in Chennai and beyond.`,
    responsibilities: [
      "Edit Reels, Shorts, and short-form video for multiple client brands",
      "Cut long-form footage — shoots, events, interviews — into scroll-stopping short content",
      "Work with raw footage from our Video Production team and turn edits around fast",
      "Handle sound design, captions, transitions, and pacing tailored to each platform",
      "Color grade and finish videos to a consistent, professional standard",
      "Stay on top of reels trends, formats, and editing styles across industries",
      "Organise and manage raw footage and project files without losing anything",
    ],
    requirements: [
      "1–3 years of hands-on reels/short-form editing experience (mandatory)",
      "Majority of your editing experience must be on DaVinci Resolve — Fusion basics and Fairlight audio are a plus",
      "Working knowledge of color correction and grading fundamentals",
      "Comfortable with captions, motion graphics basics, and sound design for short-form",
      "A portfolio or showreel is mandatory to apply",
      "Own laptop capable of running DaVinci Resolve smoothly, preferred",
    ],
    qualities: [
      "An eye for pacing and rhythm — you know what makes a reel actually perform",
      "Fast turnaround without cutting corners on quality",
      "Organised, reliable, and proactive",
      "No ego about revisions — you take feedback and iterate fast",
      "Self-starter who doesn't wait to be told what to do",
    ],
    whatYouGet: [
      "Salary based on experience",
      "Work on high-visibility clients across sports, healthcare, and wellness",
      "Direct access to the Founder and Video Production Head — steep learning curve, fast growth",
      "A team that values ownership, not just execution",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
    ],
  },
  "social-media-manager-intern": {
    title: "Social Media Manager Intern",
    department: "Digital Marketing",
    type: "Full-time · Internship",
    location: "Chennai, India",
    datePosted: "17/07/2026",
    experience: "0–2 years",
    shortDescription:
      "Own the content calendar and client relationship for real brands.",
    aboutCompany: `EyeLevel was not built by an agency chasing clients. It was built by a marketing head who spent 15 years hiring agencies, and knowing exactly what they failed to deliver.

We're not your agency. We're your extended marketing team — one studio, full stack, zero handoffs, working across sports, healthcare, real estate, IT/SaaS, and automotive brands in Chennai and beyond.`,
    responsibilities: [
      "Manage social media accounts end-to-end for multiple client brands — Instagram, Facebook, LinkedIn",
      "Build and own the monthly content calendar for each client",
      "Work closely with the content team — designers, video editors, and AI content — to get videos, photos, and reels executed on schedule",
      "Coordinate shoots — scheduling, logistics, and being on-ground point of contact when needed",
      "Act as the day-to-day bridge between the EyeLevel team and the client — relay briefs in, updates out, nothing lost in translation",
      "Manage posting, scheduling, and community engagement — comments, DMs, basic reputation monitoring",
      "Track performance monthly and flag content gaps or delays before they become a client problem",
    ],
    requirements: [
      "0–2 years managing social media for a brand, agency, or personal project (internships/freelance count)",
      "Working knowledge of Instagram, Facebook, and LinkedIn — content formats, posting best practices, basic analytics",
      "Comfortable writing captions and content briefs in clear English",
      "Basic familiarity with scheduling tools (Meta Business Suite, or similar) is a plus",
      "Comfortable coordinating with multiple people — designers, editors, and clients — at the same time",
    ],
    qualities: [
      "Organised and reliable — you own the calendar, nothing falls through the cracks",
      "Proactive — you flag problems and chase deliverables, you don't wait to be told",
      "Clear communicator — equally comfortable briefing the internal team and updating a client",
      "No ego about feedback — you take direction and iterate fast",
      "Self-starter who treats the client relationship like it's their own",
    ],
    whatYouGet: [
      "Stipend based on experience, to be discussed",
      "Work on real client brands across healthcare, sports, and wellness — not a mock portfolio",
      "Direct access to the Founder and Digital Marketing Lead — fast learning curve",
      "Clear path to grow into a full-time Social Media Manager / Account Manager role",
      "A team that values ownership, not just execution",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
    ],
  },
  "general-application": {
    title: "General Application",
    department: "Various",
    type: "Full-time / Part-time",
    location: "Remote / Hybrid / On-site",
    datePosted: "Open",
    experience: "Various",
    shortDescription:
      "We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our growth story.",
    aboutCompany: `Founded in 2020, Eyelevel Growth Studio is a digital growth partner for leading brands and hyper-scaling startups in India. With a team of digital experts across Bengaluru, Mumbai, NCR, and Chennai, we are one of India's fastest-growing independent digital marketing solutions companies.

Eyelevel is a Google Premier Partner, Facebook Business Partner, and works closely with ecosystem partners like Hotstar, Amazon & LinkedIn.`,
    responsibilities: [
      "Responsibilities will vary based on the role and your expertise.",
      "Collaborate with cross-functional teams to deliver exceptional results.",
      "Contribute to the growth and success of our clients.",
      "Stay updated with industry trends and best practices.",
    ],
    requirements: [
      "Relevant experience in your area of expertise.",
      "Strong communication and collaboration skills.",
      "Passion for digital marketing and growth.",
      "Ability to work in a fast-paced environment.",
    ],
    qualities: [
      "Someone who embraces the Eyelevel Mindset.",
      "Creative and data-driven approach.",
      "Positive attitude and eagerness to learn.",
      "Team player with strong work ethic.",
    ],
    benefits: [
      "Competitive compensation",
      "Flexible work arrangements",
      "Learning and development opportunities",
      "Great team culture",
    ],
  },
};

// "dd/mm/yyyy" -> sortable timestamp. Listings without a parseable date
// (e.g. the evergreen "Open") sort last.
const postedAt = (slug: string) => {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(
    rawJobListings[slug]?.datePosted ?? "",
  );
  if (!match) return -Infinity;
  const [, day, month, year] = match;
  return Date.UTC(Number(year), Number(month) - 1, Number(day));
};

export const openPositions: OpenPosition[] = normalizeTextDeep(
  rawOpenPositions
    .map((position) => ({
      ...position,
      slug: titleToSlug(position.title),
    }))
    .sort((a, b) => postedAt(b.slug) - postedAt(a.slug)),
);

export const jobListings = normalizeTextDeep(rawJobListings);

export const careerDetailRoutes = Object.keys(jobListings).map(
  (slug) => `/careers/${slug}`,
);
