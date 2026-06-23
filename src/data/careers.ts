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
    title: "Account & Creative Lead",
    department: "Account Management & Creative",
    type: "On-site",
    location: "Chennai, India",
    description:
      "Own client relationships and creative quality across all active projects.",
  },
  {
    title: "Social Media Intern",
    department: "Social Media",
    type: "Full-time · Internship",
    location: "Chennai, India",
    description:
      "Work on real client accounts and learn social media marketing from the inside.",
  },
  {
    title: "Real Estate Sales Manager",
    department: "Sales",
    type: "On-site",
    location: "Chennai, India",
    description:
      "Build lasting client relationships and deliver consistent closures.",
  },
  {
    title: "Head of Creative & Strategy",
    department: "Creative & Strategy",
    type: "On-site",
    location: "Chennai, India",
    description: "Lead ideas, shape strategy, and turn creativity into growth.",
  },
  {
    title: "Visualizer / Senior Graphic Designer",
    department: "Creative",
    type: "On-site",
    location: "Chennai, India",
    description:
      "Turn ideas into visuals that perform across brands and campaigns.",
  },
  {
    title: "Django + DevOps Engineer",
    department: "Backend",
    type: "On-site / Hybrid",
    location: "Chennai, India",
    description: "Build backend systems that stay up and scale.",
  },
] satisfies Array<Omit<OpenPosition, "slug">>;

const rawJobListings: Record<string, JobListing> = {
  "social-media-intern": {
    title: "Social Media Intern",
    department: "Social Media",
    type: "Full-time · Internship",
    location: "Chennai, India",
    datePosted: "25/04/2026",
    experience: "Fresher / 0-1 Years",
    shortDescription:
      "Work on real client accounts and learn social media marketing from the inside.",
    aboutCompany: `Growth is a climb. We don't do guesswork. Eyelevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Manage social media accounts for real clients across Instagram, LinkedIn, Facebook, and YouTube",
      "Plan and execute monthly content calendars",
      "Write captions, copy, and content briefs that actually perform",
      "Coordinate with the creative team to brief and deliver content on time",
      "Monitor performance - track what's working and flag what isn't",
      "Stay ahead of trends and bring platform-native ideas to the table",
      "Engage with audiences, respond to comments, and build community",
      "Support campaign execution from planning to posting",
    ],
    requirements: [
      "Genuine understanding of how Instagram, LinkedIn, and Facebook work - not just as a user, but as a marketer",
      "Strong written communication in English",
      "Basic understanding of content strategy and social media metrics",
      "Ability to manage multiple accounts and deadlines without dropping the ball",
      "Familiarity with tools like Canva, Meta Business Suite, or scheduling platforms is a plus",
      "No prior agency experience required - but you must have a point of view",
    ],
    qualities: [
      "Someone who notices when a brand's social media is underperforming - and knows why",
      "Organised, reliable, and proactive under pressure",
      "Creative thinker who can execute fast",
      "Open to feedback and hungry to improve",
      "Self-starter who doesn't wait to be told what to do",
      "Someone who takes content seriously - not just someone who \"likes social media\"",
    ],
    whatYouGet: [
      "Paid internship from Day 1",
      "Work on real client accounts - sports leagues, wellness brands, events, and more",
      "Direct mentorship from Eyelevel's founding team",
      "A full-time permanent role at the end of 3 months - no guesswork, no maybe",
      "Fast-paced environment where your work actually matters",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
      "A team that values output over noise",
    ],
  },
  "real-estate-sales-manager": {
    title: "Real Estate Sales Manager",
    department: "Sales",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "21/01/2026",
    experience: "5+ years",
    shortDescription:
      "Build lasting client relationships and deliver consistent closures.",
    aboutCompany: `Growth is a climb. We don't do guesswork. Eyelevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Drive sales for residential and/or commercial real estate projects",
      "Manage the complete sales cycle: lead handling, site visits, negotiations, and closures",
      "Build and maintain strong relationships with clients, channel partners, and brokers",
      "Understand customer requirements and recommend suitable properties",
      "Track market trends, pricing, competition, and buyer behavior",
      "Coordinate with internal teams to ensure smooth documentation and handover",
      "Meet and exceed monthly and quarterly sales targets",
      "Represent the brand professionally at client meetings, site visits, and events",
    ],
    requirements: [
      "Minimum 5+ years of experience in real estate sales (mandatory)",
      "Proven track record of closing property deals successfully",
      "Strong industry connections and an existing client/broker network",
      "Excellent communication, negotiation, and presentation skills",
      "Multilingual: English + regional languages (Tamil preferred)",
      "Deep understanding of real estate processes and market dynamics",
      "Willingness to travel for sales activities and site visits",
    ],
    qualities: [
      "Confident, presentable, and relationship-driven personality",
      "Target-driven closer with a strong sales mindset",
      "High ownership and accountability for results",
      "Ability to build trust quickly with clients and partners",
      "Self-motivated and performance-focused",
    ],
    benefits: [
      "High-visibility role with direct impact on revenue",
      "Attractive fixed salary with high-performance incentives",
      "Work with a growing, ambitious team",
      "Clear growth path linked to performance",
      "Opportunity to grow alongside the business",
    ],
  },
  "head-of-creative-strategy": {
    title: "Head of Creative & Strategy",
    department: "Creative & Strategy",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "22/01/2026",
    experience: "5+ years",
    shortDescription:
      "Lead ideas, shape strategy, and turn creativity into growth.",
    aboutCompany: `Growth is a climb. We don't do guesswork. Eyelevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Own the creative vision and strategic direction across all Eyelevel projects",
      "Lead, mentor, and push the creative squad - designers, editors, and creators",
      "Translate business problems into clear, conversion-focused creative strategies",
      "Build campaign roadmaps that drive revenue, not just aesthetics",
      "Manage workflows, assign tasks, and ensure zero missed deadlines",
      "Present work confidently to clients and explain the why behind every decision",
      "Handle feedback constructively and protect the quality of output",
      "Drive innovation through new campaign ideas, formats, and AI workflows",
      "Ensure every deliverable - from logos to full-funnel campaigns - performs",
    ],
    requirements: [
      "5+ years of experience in a Creative or Advertising Agency (mandatory)",
      "Strong ability to combine strategy and creative thinking",
      "Hands-on expertise with Adobe Creative Suite (Photoshop, Illustrator, etc.)",
      "A portfolio that proves brand-building and action-driving work",
      "Experience managing people, timelines, and multiple projects",
      "Clear, simple communication - no jargon, no fluff",
    ],
    qualities: [
      "Ownership mindset - you take responsibility, not excuses",
      "Problem-solver who cares about outcomes, not applause",
      "Calm leader who can push teams without chaos",
      "Confident presenter who can defend ideas logically",
      "Curious, adaptive, and always improving",
      "Comfortable working in a high-performance environment",
    ],
    benefits: [
      "High-impact leadership role with real decision-making power",
      "Work on brands and problems that actually matter",
      "Performance-driven culture with zero micromanagement",
      "Space to experiment, innovate, and grow fast",
      "A team that values clarity, speed, and execution",
    ],
  },
  "visualizer-senior-graphic-designer": {
    title: "Visualizer / Senior Graphic Designer",
    department: "Creative",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "22/01/2026",
    experience: "5+ years",
    shortDescription:
      "Turn ideas into visuals that perform across brands and campaigns.",
    aboutCompany: `Growth is a climb. We don't do guesswork. Eyelevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Translate ideas and strategies into strong, effective visual design",
      "Create brand, campaign, and marketing creatives across platforms",
      "Work on digital and offline creatives with equal confidence",
      "Support campaigns from concept to execution",
      "Collaborate closely with strategy and performance teams",
      "Ensure design output is sharp, consistent, and on-brand",
      "Meet deadlines without compromising on quality",
    ],
    requirements: [
      "Strong skills in visual conceptualisation and design thinking",
      "Experience in brand, campaign, and marketing design",
      "Hands-on expertise with Adobe Creative Suite",
      "Strong understanding of design fundamentals",
      "Ability to handle both digital and offline design",
      "Agency experience is mandatory",
    ],
    qualities: [
      "Visual thinker with a strong point of view",
      "Detail-oriented and quality-obsessed",
      "Comfortable taking feedback and improving fast",
      "Self-driven and reliable under deadlines",
      "Team player who understands real-world constraints",
      "Someone who designs with purpose, not just aesthetics",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
      "A team that values output over noise",
    ],
  },
  "account-creative-lead": {
    title: "Account & Creative Lead",
    department: "Account Management & Creative",
    type: "Full-time",
    location: "Chennai, India",
    datePosted: "20/05/2026",
    experience: "4–6 years",
    shortDescription:
      "Own client relationships and creative quality across all active projects.",
    aboutCompany: `Eyelevel is a full-service growth studio based in Chennai. We work with brands across sports, healthcare, education, and luxury — handling everything from brand strategy and creative campaigns to events, digital marketing, and performance advertising.

We are not a large agency. We are a tight, ambitious team that moves fast, thinks big, and genuinely cares about client outcomes. We have worked with clients like Chennai Superchamps, Bengaluru Jawans, Joyalukkas, and leading healthcare and education brands across South India.`,
    responsibilities: [
      "Own day-to-day client communication across all active projects",
      "Attend client meetings, take briefs, and translate them into clear internal briefs for the team",
      "Assign work to designers, video editors, digital marketing executives, and developers",
      "Review all creative output before it reaches the client — quality sits with you",
      "Brief designers with clarity — reference points, tone, layout direction",
      "Jump into Photoshop or Illustrator when needed to demonstrate, not just describe",
      "Build monthly content calendars, campaign plans, and project timelines",
      "Track work-in-progress daily and ensure nothing falls through the cracks",
      "Coordinate between internal teams and external vendors",
      "Run team standups and keep everyone aligned",
      "Contribute to campaign strategy alongside the Founder",
      "Handle weekly project status updates to clients and internal leadership",
    ],
    requirements: [
      "4–6 years of experience in a marketing or creative agency (mandatory)",
      "Degree in Visual Communication, Mass Communication, or a related field",
      "Hands-on proficiency in Adobe Illustrator and Photoshop",
      "Working knowledge of video editing — you don't need to edit daily, but you must brief editors with precision",
      "Understanding of social media management across Instagram, LinkedIn, and Facebook",
      "Working knowledge of digital marketing — Meta Ads, Google Ads, SEO basics, email campaigns",
      "Strong written and verbal communication in English and Tamil",
      "Ability to manage multiple clients and projects simultaneously without losing quality",
    ],
    qualities: [
      "Someone who can hold a client relationship and a creative brief in the same hand",
      "Organised, reliable, and proactive — you flag problems before they become fires",
      "Strong eye for creative quality — you know when something is off, and you can articulate why",
      "Comfortable giving feedback to the team and receiving it from clients",
      "No ego about rolling up sleeves — strategy one hour, Photoshop the next",
      "Self-starter who doesn't wait to be told what to do",
      "Agency-trained instincts — you understand timelines, approvals, revisions, and client management without needing it explained",
    ],
    whatYouGet: [
      "Salary of Rs 55,000 – 65,000/month based on experience",
      "Work on high-visibility clients in sports, healthcare, and luxury",
      "Direct access to the Founder — steep learning curve, fast growth",
      "Clear path to grow into the Studio Manager role as Eyelevel scales",
      "A team that values ownership, not just execution",
    ],
    benefits: [
      "Work on real brands and real growth problems",
      "Fast-paced, high-performance culture",
      "Clear expectations and zero confusion",
      "Room to grow creatively and professionally",
      "A team that values output over noise",
    ],
  },
  "django-devops-engineer": {
    title: "Django + DevOps Engineer",
    department: "Backend",
    type: "On-site / Hybrid",
    location: "Chennai, India",
    datePosted: "23/01/2026",
    experience: "3+ years",
    shortDescription: "Build backend systems that stay up and scale.",
    aboutCompany: `Growth is a climb. We don't do guesswork. Eyelevel Growth Studio isn't a traditional "stiff" agency. We are a high-performance growth engine. We unite strategy, design, AI, and performance to help brands rise.
Our promise is simple: Serious attention. Clear timelines. No confusion. We don't care about vanity metrics. We care about leads, sales, and real business outcomes. We are the "smart, busy friend" clients trust to get it done.
`,
    responsibilities: [
      "Develop and maintain backend applications using Python and Django",
      "Deploy, manage, and maintain applications on Ubuntu-based VPS servers",
      "Configure, optimize, and maintain Apache web servers",
      "Set up and manage CI/CD pipelines for reliable and repeatable deployments",
      "Monitor systems, troubleshoot issues, and ensure high availability",
      "Improve application performance, security, and deployment workflows",
      "Take ownership from code commit to production release",
    ],
    requirements: [
      "3+ years of hands-on experience with Python and Django",
      "Strong understanding of Linux (Ubuntu) server environments",
      "Experience with Apache configuration and server management",
      "Hands-on experience managing VPS or cloud infrastructure",
      "Familiarity with CI/CD tools and deployment automation",
      "Ability to independently handle deployments and production issues",
    ],
    qualities: [
      "Ownership mindset - you don't wait to be told",
      "Comfortable working across development and infrastructure",
      "Calm problem-solver during production issues",
      "Detail-oriented with a focus on stability and security",
      "Clear communicator who values alignment and clarity",
      "Someone who enjoys building systems that just work",
    ],
    benefits: [
      "High-ownership role with real production responsibility",
      "Opportunity to shape deployment and infrastructure decisions",
      "Clear expectations and direct communication",
      "Work with a fast-moving, execution-focused team",
      "Space to grow technically while building real-world systems",
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

export const openPositions: OpenPosition[] = normalizeTextDeep(
  rawOpenPositions.map((position) => ({
    ...position,
    slug: titleToSlug(position.title),
  })),
);

export const jobListings = normalizeTextDeep(rawJobListings);

export const careerDetailRoutes = Object.keys(jobListings).map(
  (slug) => `/careers/${slug}`,
);
