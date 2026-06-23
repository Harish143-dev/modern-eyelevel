import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import GreenButton from "@/components/shared/GreenButton";
import SEO from "@/components/utils/SEO";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, organizationSchema } from "@/hooks/schemas";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  Layers3,
  Palette,
  Sparkles,
  SquareStack,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import poster1 from "@/assets/services/content/poster_1.webp";
import poster3 from "@/assets/services/content/poster_3.webp";
import production1 from "@/assets/services/content/production_1.webp";
import production2 from "@/assets/services/content/production_2.webp";
import production3 from "@/assets/services/content/production_3.webp";
import photoGallery1 from "@/assets/services/content/photo-gallery-1.webp";
import photoGallery2 from "@/assets/services/content/photo-gallery-2.webp";
import photoGallery3 from "@/assets/services/content/photo-gallery-3.webp";
import socialMedia from "@/assets/services/social/social-media.webp";
import web1 from "@/assets/mockup/web_1.webp";
import web2 from "@/assets/mockup/web_2.webp";
import web3 from "@/assets/mockup/web_3.webp";
import web4 from "@/assets/mockup/web_4.webp";
import logo1 from "@/assets/logos/logo_1.png";
import logo2 from "@/assets/logos/logo_2.png";
import logo3 from "@/assets/logos/logo_3.webp";
import logo4 from "@/assets/logos/logo_4.png";
import logo5 from "@/assets/logos/logo_5.png";
import logo6 from "@/assets/logos/logo_6.png";
import logo7 from "@/assets/logos/logo_7.png";
import logo8 from "@/assets/logos/logo_8.png";
import logo9 from "@/assets/logos/logo_9.png";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const featuredProjects = [
  {
    client: "Matchday Creative System",
    category: "Campaign Design",
    description: "Poster-led sports creatives built for launch week impact.",
    image: production1,
    size: "lg:col-span-7",
  },
  {
    client: "Vantage Identity",
    category: "Brand Identity",
    description: "A premium visual language shaped for trust and recall.",
    image: poster1,
    size: "lg:col-span-5",
  },
  {
    client: "Northstar Campaign Kit",
    category: "Social Creatives",
    description: "A scroll-ready admission campaign with strong visual rhythm.",
    image: socialMedia,
    size: "lg:col-span-5",
  },
  {
    client: "Founder Digital Lookbook",
    category: "Premium Web Visuals",
    description: "Editorial layouts and interface visuals for a sharper brand.",
    image: web1,
    size: "lg:col-span-7",
  },
];

const clients = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

const categories = [
  {
    title: "Branding",
    text: "Logos, identity systems, colors, typography, and brand worlds.",
    icon: BadgeCheck,
  },
  {
    title: "Motion Design",
    text: "Animated campaign assets, reel treatments, and kinetic brand moments.",
    icon: Clapperboard,
  },
  {
    title: "Campaign Design",
    text: "Key visuals, launch concepts, ad creatives, and campaign systems.",
    icon: WandSparkles,
  },
  {
    title: "Social Media Creatives",
    text: "Carousels, posters, story assets, reels covers, and content templates.",
    icon: SquareStack,
  },
  {
    title: "CGI / Visual Production",
    text: "Product visuals, mockups, compositing, production direction, and finish.",
    icon: Layers3,
  },
  {
    title: "Digital Design",
    text: "Website visuals, landing-page art direction, UI sections, and mockups.",
    icon: Palette,
  },
];

const gallery = [
  { image: poster3, title: "Poster Design", span: "md:row-span-2" },
  { image: photoGallery1, title: "Campaign Shoot", span: "" },
  { image: web2, title: "Landing Visual", span: "" },
  { image: production2, title: "Motion Frame", span: "md:row-span-2" },
  { image: photoGallery2, title: "Art Direction", span: "" },
  { image: web3, title: "Digital Layout", span: "" },
  { image: production3, title: "Launch Key Visual", span: "" },
  { image: photoGallery3, title: "Content Visual", span: "" },
  { image: web4, title: "Website Mockup", span: "md:col-span-2" },
];

const philosophy = [
  "Brand clarity before visual design",
  "Campaign ideas shaped into design systems",
  "Creative assets made for every format",
  "Finishing details that make the work feel premium",
];

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const bannerLift = useTransform(scrollYProgress, [0.35, 0.8], [50, -50]);

  return (
    <div className="min-h-screen overflow-hidden bg-secondary text-foreground">
      <SEO
        title="Creative Design Works | Eyelevel Growth Studio"
        description="Selected Eyelevel creative design work across branding, campaign creatives, motion design, posters, social media visuals, and premium marketing assets."
        keywords={[
          "creative design works",
          "branding design",
          "campaign design",
          "motion design agency",
          "social media creatives",
          "poster design",
          "premium marketing visuals",
          "Eyelevel creative work",
        ]}
        schema={[
          organizationSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            {
              name: "Portfolio",
              url: "https://theeyelevelstudio.com/portfolio",
            },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/portfolio"
        url="https://theeyelevelstudio.com/portfolio"
      />
      <Header />

      <main>
        <section className="relative min-h-[82vh] overflow-hidden px-4 pb-20 pt-36 md:px-8 md:pb-24 lg:px-12">
          <motion.img
            style={{ y: heroLift }}
            src={production1}
            alt="Eyelevel creative design work"
            className="absolute inset-0 h-[112%] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,62,53,0.94)_0%,rgba(37,62,53,0.78)_42%,rgba(37,62,53,0.38)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,62,53,0.2)_0%,#253e35_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[64vh] max-w-7xl items-end">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp}>
                <GreenButton>Our Creative Works</GreenButton>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-dela text-4xl uppercase leading-tight text-primary md:text-5xl"
              >
                Creative Works
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl font-bricolage text-base leading-7 text-foreground/72 md:text-lg"
              >
                A focused collection of branding, campaign creatives, social
                media designs, motion visuals, posters, and premium marketing
                assets crafted by Eyelevel.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-9 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/12 bg-primary/12 font-bricolage sm:grid-cols-4"
              >
                {["Branding", "Campaigns", "Motion", "Posters"].map((item) => (
                  <span
                    key={item}
                    className="bg-secondary px-4 py-3 text-center text-xs uppercase tracking-[0.16em] text-foreground/64"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <GreenButton>Selected Creative Work</GreenButton>
                <h2 className="font-dela text-3xl uppercase text-primary md:text-5xl">
                  Designs built for brand recall
                </h2>
              </div>
              <p className="max-w-sm font-bricolage text-sm uppercase tracking-[0.18em] text-foreground/55">
                Brand identity, launch campaigns, poster systems, social media
                creatives, motion frames, and premium digital visuals.
              </p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-12">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.client}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`group relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-primary/15 bg-background ${project.size}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.client} ${project.category}`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,28,23,0.04),rgba(14,28,23,0.78)_72%)] transition duration-500 group-hover:bg-forest-deep/42" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between gap-4 font-bricolage text-xs uppercase tracking-[0.18em] text-primary/80">
                      <span>{project.category}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <h3 className="font-dela text-2xl uppercase text-foreground md:text-4xl">
                      {project.client}
                    </h3>
                    <p className="mt-3 max-w-md font-bricolage text-base text-foreground/72">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-primary/10 py-10">
          <div className="mb-8 px-4 text-center font-bricolage text-xs uppercase tracking-[0.26em] text-foreground/45">
            Creative design support for ambitious brands
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...clients, ...clients].map((logo, index) => (
                <div
                  key={`${index}-${logo}`}
                  className="flex h-20 w-36 items-center justify-center px-6 opacity-80 transition hover:opacity-100"
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end"
            >
              <div>
                <GreenButton>Creative Design Categories</GreenButton>
                <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-5xl">
                  What we design
                </h2>
              </div>
              <p className="max-w-xl font-bricolage text-base leading-7 text-foreground/66">
                Focused design outputs for brands that need stronger identity,
                sharper campaign presence, and premium visual execution across
                every marketing touchpoint.
              </p>
            </motion.div>

            <div className="overflow-hidden rounded-[1.75rem] border border-primary/12 bg-card/[0.035]">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.article
                    key={category.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group grid gap-5 border-b border-primary/10 p-5 transition last:border-b-0 hover:bg-primary/[0.075] md:grid-cols-[90px_1fr_0.9fr_52px] md:items-center md:p-7"
                  >
                    <span className="font-bricolage text-xs uppercase tracking-[0.22em] text-primary/45">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/18 bg-secondary text-primary transition group-hover:border-primary/45 group-hover:bg-primary group-hover:text-[#0a0a0a]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-dela text-xl uppercase leading-tight text-foreground md:text-2xl">
                        {category.title}
                      </h3>
                    </div>
                    <p className="font-bricolage text-sm leading-6 text-foreground/62 md:text-base">
                      {category.text}
                    </p>
                    <ArrowRight className="hidden h-5 w-5 justify-self-end text-primary/50 transition group-hover:translate-x-1 group-hover:text-primary md:block" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative min-h-[78vh] overflow-hidden">
          <motion.img
            style={{ y: bannerLift }}
            src={production3}
            alt="Cinematic campaign production"
            className="absolute inset-0 h-[115%] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#253e35_0%,rgba(37,62,53,0.78)_42%,rgba(37,62,53,0.2)_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 md:px-8 lg:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-bricolage text-xs uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-4 w-4" />
                Creative Direction
              </div>
              <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-5xl">
                Every creative should feel intentional
              </h2>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <GreenButton>Design Gallery</GreenButton>
                <h2 className="font-dela text-3xl uppercase text-primary md:text-5xl">
                  Creative work across formats
                </h2>
              </div>
              <p className="max-w-md font-bricolage text-foreground/62">
                A curated mix of posters, campaign visuals, brand assets,
                motion frames, digital layouts, and social media creatives.
              </p>
            </div>

            <div className="grid auto-rows-[260px] gap-5 md:grid-cols-3">
              {gallery.map((item, index) => (
                <motion.figure
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.05 }}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-primary/12 bg-background ${item.span}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full border border-[#F8FFE8]/10 bg-forest-deep/72 px-4 py-3 font-bricolage text-sm text-foreground opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.title}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 border-t border-primary/12 pt-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <GreenButton>Creative Philosophy</GreenButton>
              <h2 className="font-dela text-3xl uppercase leading-tight text-primary md:text-5xl">
                Design thinking, sharpened by strategy
              </h2>
            </motion.div>
            <div className="space-y-6">
              <p className="font-bricolage text-lg leading-8 text-foreground/72">
                We begin with brand positioning, audience behavior, and the
                emotional truth behind the campaign. Then we translate that
                clarity into visual identity, posters, motion frames, social
                creatives, layouts, and campaign assets that feel distinctive at
                every size.
              </p>
              <div className="grid gap-3">
                {philosophy.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-primary/12 px-5 py-4 font-bricolage text-foreground/82"
                  >
                    <span>{item}</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-28 md:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-7xl rounded-[2rem] border border-[#0a0a0a] bg-card p-8 text-[#0a0a0a] shadow-[0_8px_0_#0a0a0a] md:p-12 lg:p-16"
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-5 font-bricolage text-sm uppercase tracking-[0.24em] text-forest-muted/70">
                  Ready when the idea is
                </p>
                <h2 className="font-dela text-3xl uppercase leading-tight text-forest-muted md:text-5xl">
                  Let&apos;s Create Something Exceptional
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact-us">
                  <Button className="h-12 rounded-full bg-secondary px-7 font-bricolage font-semibold text-foreground hover:bg-background">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border-2 border-[#0a0a0a] bg-primary px-7 font-bricolage font-semibold text-[#0a0a0a] hover:bg-[#d8f68b]"
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div>
  );
};

export default Portfolio;



