import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/utils/SEO";
import {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/hooks/schemas";
import {
  blogCategories,
  blogPostsData,
  blogPosts,
  getBlogPostingSchema,
  getBlogCategoryUrl,
} from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  return blogPosts
    .filter(
      (post) => post.slug !== currentSlug && post.category === currentCategory,
    )
    .slice(0, 3);
};

type BlogContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

const toBlogContentBlocks = (content: string[]): BlogContentBlock[] => {
  const blocks: BlogContentBlock[] = [];
  let pendingList: string[] = [];

  const flushList = () => {
    if (pendingList.length === 0) return;
    blocks.push({ type: "ul", items: pendingList });
    pendingList = [];
  };

  for (const raw of content) {
    const paragraph = raw.trim();
    if (!paragraph) continue;

    if (paragraph.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: paragraph.slice(3) });
      continue;
    }

    if (paragraph.startsWith("### ")) {
      flushList();
      blocks.push({ type: "h3", text: paragraph.slice(4) });
      continue;
    }

    const bulletMatch = paragraph.match(/^(-|•)\s+(.*)$/);
    if (bulletMatch) {
      pendingList.push(bulletMatch[2]);
      continue;
    }

    flushList();
    blocks.push({ type: "p", text: paragraph });
  }

  flushList();
  return blocks;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const baseUrl = "https://theeyelevelstudio.com";

  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary">
        <SEO
          title="Post Not Found | Eyelevel Growth Studio"
          description="The requested blog article could not be found."
          keywords={[
            "blog post not found",
            "marketing blog",
            "eyelevel studio",
          ]}
          canonical={`${baseUrl}/blog`}
          url={slug ? `${baseUrl}/blog/${slug}` : `${baseUrl}/blog`}
          noindex
        />
        <Header />
        <main className="pt-32 pb-[100px]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dela text-4xl text-foreground mb-4">
              Post Not Found
            </h1>
            <p className="text-[rgba(248,255,232,0.7)] mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/blog")}
              className="bg-primary text-forest-muted"
            >
              Back to Blog
            </Button>
          </div>
        </main>
        <EnhancedFooter />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug!, post.category);
  const contentBlocks = toBlogContentBlocks(post.content);

  const handleShare = (platform: string) => {
    if (typeof window === "undefined") return;

    const url = window.location.href;
    const text = post.title;

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const postUrl = slug ? `${baseUrl}/blog/${slug}` : `${baseUrl}/blog`;

  return (
    <div className="min-h-screen bg-secondary">
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.keywords}
        image={`${baseUrl}${post.image}`}
        imageAlt={post.title}
        type="article"
        schema={[
          organizationSchema,
          websiteSchema,
          getBlogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", url: `${baseUrl}/` },
            { name: "Blog", url: `${baseUrl}/blog` },
            {
              name: post.category,
              url: `${baseUrl}/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`,
            },
            { name: post.title, url: postUrl },
          ]),
        ]}
        canonical={postUrl}
        url={postUrl}
        twitterCreator="@Eyelevelstudio"
      />
      <Header />

      <section className="relative py-[100px]">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#253e35]/50 via-transparent to-[#253e35]" />
          <img
            loading="eager"
            fetchPriority="high"
            src={post.image}
            alt={post.title}
            title={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold font-bricolage mb-4 bg-primary text-primary-foreground"
                >
                  {post.category}
                </span>
                <h1 className="font-dela text-2xl md:text-4xl lg:text-5xl text-foreground uppercase mb-4">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 border-b border-[rgba(226,254,165,0.1)] py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-primary transition-colors w-fit"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.6)" }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author.name}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-invert max-w-none prose-headings:font-dela prose-headings:uppercase prose-h2:text-primary prose-h3:text-primary prose-p:font-bricolage prose-p:text-[rgba(248,255,232,0.86)] prose-li:font-bricolage prose-li:text-[rgba(248,255,232,0.86)] prose-li:marker:text-primary prose-ul:pl-6 prose-ul:my-6 prose-li:my-2 prose-strong:text-foreground"
              >
                {contentBlocks.map((block, index) => {
                  switch (block.type) {
                    case "h2":
                      return <h2 key={index}>{block.text}</h2>;

                    case "h3":
                      return <h3 key={index}>{block.text}</h3>;

                    case "p":
                      return (
                        <p key={index}>
                          <ReactMarkdown>{block.text}</ReactMarkdown>
                        </p>
                      );

                    case "ul":
                      return (
                        <ul key={index}>
                          {block.items.map((item, i) => (
                            <li key={i}>
                              <ReactMarkdown>{item}</ReactMarkdown>
                            </li>
                          ))}
                        </ul>
                      );

                    default:
                      return null;
                  }
                })}
                <div
                  className="mt-10 rounded-3xl p-6 md:p-8 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(226, 254, 165, 0.12), rgba(248, 255, 232, 0.04))",
                    border: "1px solid rgba(226, 254, 165, 0.18)",
                  }}
                >
                  <h3 className="font-dela text-xl md:text-2xl text-foreground uppercase mb-3">
                    {post.cta?.heading}
                  </h3>
                  <p
                    className="font-bricolage text-base mb-6"
                    style={{ color: "rgba(248, 255, 232, 0.78)" }}
                  >
                    {post.cta?.description}
                  </p>
                  <Button
                    onClick={() =>
                      navigate({ pathname: post.cta?.btnLink || "/services" })
                    }
                    className="rounded-full px-7 py-6 font-semibold font-bricolage bg-primary text-primary-foreground"
                  >
                    {post.cta?.btnText}
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-[rgba(226,254,165,0.1)]">
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "rgba(248, 255, 232, 0.5)" }}
                  >
                    Tags:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-bricolage"
                        style={{
                          backgroundColor: "rgba(226, 254, 165, 0.1)",
                          color: "#E2FEA5",
                          border: "1px solid rgba(226, 254, 165, 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-68 space-y-8"
              >
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(248, 255, 232, 0.03)",
                    border: "1px solid rgba(226, 254, 165, 0.1)",
                  }}
                >
                  <p className="font-dela text-lg text-foreground mb-4">
                    Categories
                  </p>
                  <div className="flex flex-col gap-2">
                    {blogCategories.map((category) => {
                      const isActive = category === post.category;

                      return (
                        <Link
                          key={category}
                          to={getBlogCategoryUrl(category)}
                          className="rounded-xl px-4 py-3 text-sm font-bricolage transition-colors"
                          style={{
                            backgroundColor: isActive
                              ? "rgba(226, 254, 165, 0.15)"
                              : "rgba(248, 255, 232, 0.03)",
                            color: isActive ? "#E2FEA5" : "#F8FFE8",
                            border: isActive
                              ? "1px solid rgba(226, 254, 165, 0.35)"
                              : "1px solid rgba(226, 254, 165, 0.1)",
                          }}
                        >
                          {category}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="p-4 rounded-2xl sticky top-40"
                  style={{
                    backgroundColor: "rgba(248, 255, 232, 0.03)",
                    border: "1px solid rgba(226, 254, 165, 0.1)",
                  }}
                >
                  <p className="font-dela text-lg text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-primary" />
                    Share Article
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: "rgba(226, 254, 165, 0.1)" }}
                    >
                      <LinkIcon className="w-5 h-5 text-primary" />
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[rgba(226,254,165,0.1)]">
                    <p
                      className="text-sm mb-4"
                      style={{ color: "rgba(248, 255, 232, 0.5)" }}
                    >
                      Written by
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      {post.author.image ? (
                        <img
                          loading="lazy"
                          src={post.author.image}
                          alt={post.author.name}
                          title={post.author.name}
                          className="size-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="size-12 bg-primary text-forest-muted text-3xl font-bold rounded-full flex items-center justify-center">
                          <span>{post.author.name.charAt(0)}</span>
                        </div>
                      )}

                      <div>
                        <p className="font-dela text-foreground">
                          {post.author.name}
                        </p>
                        <p
                          className="text-sm font-bricolage"
                          style={{ color: "rgba(248, 255, 232, 0.5)" }}
                        >
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="px-4 bg-background py-[100px]">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p
                  className="uppercase tracking-[0.3em] text-sm mb-4 font-bricolage text-primary"
                >
                  Keep Reading
                </p>
                <h2 className="text-3xl md:text-4xl font-dela text-foreground">
                  Related Articles
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <div
                        className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                        style={{
                          backgroundColor: "rgba(248, 255, 232, 0.03)",
                          border: "1px solid rgba(226, 254, 165, 0.1)",
                        }}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            loading="lazy"
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            title={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span
                            className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full font-bricolage"
                            style={{
                              backgroundColor: "#E2FEA5",
                              color: "#0a0a0a",
                            }}
                          >
                            {relatedPost.category}
                          </span>
                        </div>
                        <div className="p-6">
                          <p
                            className="text-sm mb-2 font-bricolage"
                            style={{ color: "rgba(248, 255, 232, 0.5)" }}
                          >
                            {relatedPost.date} | {relatedPost.readTime}
                          </p>
                          <h3 className="font-dela text-lg text-foreground group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-4 bg-secondary py-[100px]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-dela text-3xl md:text-4xl text-foreground uppercase mb-6">
                Ready to Transform Your Brand?
              </h2>
              <p
                className="text-lg font-bricolage mb-8"
                style={{ color: "rgba(248, 255, 232, 0.7)" }}
              >
                Let's discuss how we can help you achieve your marketing goals.
              </p>
              <Button
                onClick={() => navigate("/contact-us")}
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
    </div>
  );
};

export default BlogPost;





