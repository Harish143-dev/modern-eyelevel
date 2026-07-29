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
    title: "AI Creative Video Intern",
    department: "Video Production",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    description:
      "Cut Reels, Shorts, and short-form video that actually performs.",
  },
  {
    title: "AI Content & Copywriting Intern",
    department: "Content & AI",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    description:
      "Create high-performing AI-assisted content, blogs, social posts, ad copies, and marketing assets for real brands.",
  },
  {
    title: "AI Creative Graphics Intern",
    department: "Creative Design",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    description:
      "Design social media creatives, branding assets, and marketing visuals using AI-powered design workflows.",
  }
] satisfies Array<Omit<OpenPosition, "slug">>;

const rawJobListings: Record<string, JobListing> = {
  "ai-creative-video-intern": {
    title: "AI Creative Video Intern",
    department: "Video Production",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    datePosted: "29/07/2026",
    experience: "0-1 years",
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

      // AI Creative additions
      "Create AI-powered video assets using tools such as Runway, Veo, Kling AI, Pika, or similar platforms",
      "Use AI tools to accelerate scripting, storyboard creation, voiceovers, subtitles, and creative ideation",
      "Experiment with emerging AI workflows to improve video quality, production speed, and creative output",
      "Collaborate with designers, content writers, and marketers to produce engaging AI-assisted campaigns",
      "Research and test the latest AI video technologies, trends, and content formats for client projects",
    ],
    requirements: [
      "0–1 years of hands-on reels/short-form editing experience (mandatory)",
      "Majority of your editing experience must be on DaVinci Resolve — Fusion basics and Fairlight audio are a plus",
      "Working knowledge of color correction and grading fundamentals",
      "Comfortable with captions, motion graphics basics, and sound design for short-form",
      "A portfolio or showreel is mandatory to apply",
      "Hands-on experience with AI-powered video tools such as Runway, Google Veo, Kling AI, Pika, Luma AI, or similar platforms is a plus",
      "Familiarity with AI-assisted editing workflows, including auto-captioning, background removal, object tracking, and generative video features",
      "Comfortable using AI tools like ChatGPT or Claude for scripting, shot planning, content ideation, and creative research",
      "Basic understanding of prompt writing for AI video generation and creative automation is an advantage",
      "Knowledge of social media content formats, trends, and platform-specific editing styles for Instagram Reels, YouTube Shorts, and TikTok",
      "Own laptop capable of running DaVinci Resolve smoothly, preferred",
    ],
    qualities: [
      "An eye for pacing and rhythm — you know what makes a reel actually perform",
      "Fast turnaround without cutting corners on quality",
      "Organised, reliable, and proactive",
      "No ego about revisions — you take feedback and iterate fast",
      "Self-starter who doesn't wait to be told what to do",
      "Passionate about AI-powered video creation and eager to explore the latest creative technologies",
      "Continuously experiments with new AI video tools, editing techniques, and storytelling formats",
      "Strong creative storytelling skills with the ability to combine traditional editing and AI workflows",
      "Keeps up with the latest trends in short-form video, AI-generated content, and creator economy",
      "Creative problem-solver who leverages AI to improve efficiency without compromising quality",
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
  "ai-content-copywriting-intern": {
    title: "AI Content & Copywriting Intern",
    department: "Digital Marketing",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    datePosted: "17/07/2026",
    experience: "0–1 years",
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
      "0–1 years managing social media for a brand, agency, or personal project (internships/freelance count)",
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
  "ai-creative-graphics-intern": {
    title: "AI Creative Graphics Intern",
    department: "Creative Design",
    type: "Full-time · Internship · On-site",
    location: "Chennai, India",
    datePosted: "29/07/2026",
    experience: "Freshers / 0–1 years",

    shortDescription:
      "Design modern graphics using AI-powered creative tools for real marketing campaigns.",

    aboutCompany: `EyeLevel Growth Studio empowers brands through creativity, strategy, and AI. Our designers combine artistic thinking with cutting-edge AI tools to deliver exceptional creative work.`,

    responsibilities: [
      "Design social media posts and ad creatives.",
      "Create branding assets and marketing materials.",
      "Use AI image generation tools responsibly.",
      "Collaborate with content writers and video editors.",
      "Maintain design consistency across campaigns.",
      "Prepare assets for multiple digital platforms.",
      "Explore new AI design workflows.",
    ],

    requirements: [
      "Basic knowledge of Photoshop, Illustrator, Canva, or Figma.",
      "Interest in AI-powered design.",
      "Creative portfolio is preferred.",
      "Basic typography and color knowledge.",
    ],

    qualities: [
      "Creative thinker.",
      "Attention to detail.",
      "Open to feedback.",
      "Team player.",
      "Eagerness to learn.",
    ],

    whatYouGet: [
      "Real-world design experience.",
      "Exposure to AI design tools.",
      "Mentorship from experienced creatives.",
      "Opportunity for long-term growth.",
    ],

    benefits: [
      "Creative freedom.",
      "Continuous learning.",
      "Work on diverse brands.",
      "Supportive team culture.",
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
