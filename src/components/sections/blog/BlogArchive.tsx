import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClientLottie, { type ClientLottieRef } from "@/components/shared/ClientLottie";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";
import SEO from "@/components/utils/SEO";
import {
  ALL_BLOGS_CATEGORY,
  BlogPost,
  blogCategories,
  getBlogArchiveSchema,
  getBlogCategoryUrl,
} from "@/data/blogs";
import { blogPageSchema, breadcrumbSchema, faqPageSchema } from "@/hooks/schemas";
import faqs from "@/data/faqs";
import FAQSection from "@/components/sections/shared/FAQSection";

type BlogArchiveProps = {
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  url: string;
  heroLabel: string;
  heroTitle: string;
  posts: BlogPost[];
  activeCategory?: string;
};

const BlogArchive = ({
  title,
  description,
  keywords,
  canonical,
  url,
  heroLabel,
  heroTitle,
  posts,
  activeCategory = ALL_BLOGS_CATEGORY,
}: BlogArchiveProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const ref = useRef(null);
  const lottieRef = useRef<ClientLottieRef>(null);
  const [animationData, setAnimationData] = useState(null);
  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  const Star18 = ({ className }: { className?: string }) => {
    const points = 18;
    const outerRadius = 100;
    const innerRadius = 75;
    const cx = 100;
    const cy = 100;

    let pathData = "";
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / points - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
    }
    pathData += "Z";

    return (
      <svg viewBox="0 0 200 200" className={className}>
        <path d={pathData} fill="currentColor" />
      </svg>
    );
  };

  useEffect(() => {
    fetch("/animations/read.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const playAnimation = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(1.5);
    lottieRef.current.goToAndPlay(0, true);
  };

  useEffect(() => {
    if (animationData && !hasPlayedInitial.current) {
      playAnimation();
      hasPlayedInitial.current = true;
    }
  }, [animationData]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftHero.current) {
            playAnimation();
            hasLeftHero.current = false;
          }
        } else {
          hasLeftHero.current = true;
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const baseUrl = "https://theeyelevelstudio.com";
  
  const breadcrumbs = activeCategory === ALL_BLOGS_CATEGORY
    ? breadcrumbSchema([
        { name: "Home", url: `${baseUrl}/` },
        { name: "Blog", url: `${baseUrl}/blog` },
      ])
    : breadcrumbSchema([
        { name: "Home", url: `${baseUrl}/` },
        { name: "Blog", url: `${baseUrl}/blog` },
        { name: activeCategory, url: `${baseUrl}${getBlogCategoryUrl(activeCategory)}` },
      ]);

  const archiveSchema = getBlogArchiveSchema(activeCategory);
  const schemas = Array.isArray(archiveSchema)
    ? [
        ...(activeCategory === ALL_BLOGS_CATEGORY ? [blogPageSchema] : []),
        ...archiveSchema,
        breadcrumbs,
        faqPageSchema(faqs["Blog"], { url }),
      ]
    : [
        ...(activeCategory === ALL_BLOGS_CATEGORY ? [blogPageSchema] : []),
        archiveSchema,
        breadcrumbs,
        faqPageSchema(faqs["Blog"], { url }),
      ];

  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-secondary">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={posts[0]?.image ? `${baseUrl}${posts[0].image}` : undefined}
        imageAlt={posts[0]?.title ?? title}
        schema={schemas}
        canonical={canonical}
        url={url}
      />
      <Header />

      <section
        ref={ref}
        className="px-4 relative min-h-[65vh] lg:min-h-[95vh] overflow-hidden flex flex-col items-center justify-center pt-40 pb-[100px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 ">
          <GreenButton>{heroLabel}</GreenButton>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="-mt-2 md:-mt-4 text-3xl md:text-5xl relative lg:text-6xl font-dela mb-6 uppercase pt-10 text-primary"
          >
            {heroTitle.includes("Blog") ? (
              <>
                {heroTitle.split("Blog")[0]}
                <span>
                  <WavyUnderline>Blog</WavyUnderline>
                  {heroTitle.split("Blog")[1]}
                </span>
              </>
            ) : (
              heroTitle
            )}
            <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          </motion.h1>
          {animationData && (
            <ClientLottie
              lottieRef={lottieRef}
              animationData={animationData}
              autoPlay={false}
              loop
              className="absolute -top-[-45px] right-[50%] w-[70px] md:-top-[5px] md:left-[20%] md:w-[120px] lg:left-[20%] lg:-top-[33px] lg:w-[150px] pointer-events-none"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[rgba(248,255,232,0.5)]" />
              <Input
                type="text"
                placeholder="Search any blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl font-bricolage bg-[rgba(248,255,232,0.06)] border-primary/25 text-foreground placeholder:text-[rgba(248,255,232,0.45)] focus-visible:ring-2 focus-visible:ring-[#E2FEA5]/35 focus-visible:border-primary/60"
              />
            </div>
          </motion.div>
        </div>

        <section className="w-full px-4 relative z-10 py-[100px]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {blogCategories.map((category, index) => {
                const isActive = category === activeCategory;

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={getBlogCategoryUrl(category)}
                      className="block px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-bricolage"
                      style={{
                        backgroundColor: isActive
                          ? "#E2FEA5"
                          : "rgba(248, 255, 232, 0.05)",
                        color: isActive ? "#0a0a0a" : "#F8FFE8",
                        border: isActive
                          ? "none"
                          : "1px solid rgba(226, 254, 165, 0.2)",
                      }}
                    >
                      {category}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </section>

      <section className="px-4 bg-background py-[100px]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full flex flex-col"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2FEA5]/40 focus-visible:ring-offset-0"
                >
                  <div className="flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-hover bg-[rgba(248,255,232,0.03)] border border-primary/15 hover:border-primary/30">
                    <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                      <img
                        loading="lazy"
                        src={post.image}
                        alt={post.title}
                        title={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />
                      <span
                        className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full font-bricolage z-10 bg-primary text-primary-foreground"
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div
                        className="flex items-center gap-3 text-sm mb-3 font-bricolage"
                        style={{ color: "rgba(248, 255, 232, 0.5)" }}
                      >
                        <span>{post.date}</span>
                        <span>|</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3
                        className="text-xl font-dela mb-3 transition-colors uppercase group-hover:text-primary line-clamp-2 text-foreground"
                      >
                        {post.title}
                      </h3>
                      <p
                        className="leading-relaxed font-bricolage mb-4 line-clamp-3 flex-grow"
                        style={{ color: "rgba(248, 255, 232, 0.7)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 font-semibold font-bricolage text-primary group-hover:gap-3 transition-all mt-auto">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-lg font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.6)" }}
              >
                No blog posts found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* faqs  */}
      <FAQSection faqs={faqs["Blog"]} />
      <section className="px-4 bg-forest-deep py-[100px]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-dela mb-4 uppercase"
          >
            <span className="text-primary">
              Stay in the loop - Be the first to
            </span>{" "}
            <WavyUnderline>know</WavyUnderline>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 font-bricolage"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Be the first to hear about our latest projects, design insights, and
            studio updates.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-6 rounded-xl font-bricolage"
              style={{
                backgroundColor: "rgba(248, 255, 232, 0.05)",
                borderColor: "rgba(226, 254, 165, 0.2)",
                color: "#F8FFE8",
              }}
            />
            <Button
              type="submit"
              className="px-8 py-6 rounded-xl font-semibold font-bricolage bg-primary text-primary-foreground"
            >
              Subscribe
            </Button>
          </motion.form>
        </div>
      </section>

      <EnhancedFooter showCTA={false} mascotBgClass="bg-forest-deep" />
    </div>
  );
};

export default BlogArchive;





