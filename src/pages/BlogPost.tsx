import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Blog posts data - in production, this would come from an API/CMS
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; image: string };
  content: string[];
  tags: string[];
}> = {
  "how-ai-is-transforming-marketing-in-2026": {
    title: "How AI is Transforming Marketing in 2026",
    excerpt: "Discover the latest AI tools and strategies that are revolutionizing how brands connect with their audiences.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    author: {
      name: "Atiqur Rahaman",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "Artificial Intelligence has moved beyond buzzword status to become the backbone of modern marketing strategies. In 2026, we're witnessing an unprecedented integration of AI tools that are fundamentally changing how brands understand, reach, and engage their audiences.",
      "## The Rise of Predictive Analytics",
      "One of the most significant shifts we've seen is the adoption of predictive analytics in campaign planning. AI-powered tools can now analyze historical data, market trends, and consumer behavior patterns to forecast campaign performance with remarkable accuracy. This means marketers can optimize their strategies before launching, rather than making adjustments on the fly.",
      "The implications are profound. Brands are seeing 40-60% improvements in ROI by leveraging predictive models to allocate budgets more effectively. The days of 'spray and pray' marketing are firmly behind us.",
      "## Personalization at Scale",
      "Perhaps the most visible change is in personalization. AI now enables hyper-personalized experiences for millions of users simultaneously. From dynamic email content that adapts to individual preferences to website experiences that reshape themselves based on user behavior, the technology has matured to a point where one-to-one marketing at scale is finally achievable.",
      "Consider this: a single campaign can now generate thousands of unique creative variations, each tailored to specific audience segments. The AI optimizes in real-time, learning which combinations resonate best with different demographics, interests, and behavioral profiles.",
      "## Conversational AI and Customer Experience",
      "Chatbots and conversational AI have evolved dramatically. Modern AI assistants can handle complex customer inquiries, provide personalized recommendations, and even complete transactions—all while maintaining natural, human-like conversations. The result is 24/7 customer support that actually enhances brand perception rather than frustrating users.",
      "## Content Creation Revolution",
      "AI-generated content has reached a level of sophistication that makes it nearly indistinguishable from human-written copy in many contexts. Smart marketers are using AI as a creative partner—generating first drafts, suggesting headlines, and even creating visual content that can be refined and approved by human team members.",
      "The key is collaboration. The most successful teams treat AI as an enhancement to human creativity, not a replacement. This symbiotic relationship is producing content at unprecedented speed and scale while maintaining the emotional intelligence and brand voice that only humans can provide.",
      "## Looking Ahead",
      "As we move through 2026, the integration of AI in marketing will only deepen. The brands that thrive will be those that embrace these tools while maintaining their authentic voice and genuine connection with customers. AI is the enabler; human creativity and strategic thinking remain the differentiators.",
      "The future of marketing isn't about AI versus humans—it's about AI empowering humans to do what they do best, at scales previously unimaginable."
    ],
    tags: ["Artificial Intelligence", "Marketing Technology", "Digital Strategy", "Automation"]
  },
  "the-psychology-of-color-in-branding": {
    title: "The Psychology of Color in Branding",
    excerpt: "Learn how color choices impact consumer perception and brand recognition in the digital age.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    date: "Jan 3, 2026",
    readTime: "7 min read",
    author: {
      name: "Sabiha Sultana",
      role: "Content Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "Color is one of the most powerful tools in a brand's arsenal. It communicates emotions, builds recognition, and influences purchasing decisions—often before a customer even reads a single word of your message.",
      "## The Science Behind Color Psychology",
      "Research consistently shows that color can account for up to 90% of snap judgments made about products. This isn't just marketing folklore; it's rooted in the way our brains process visual information and associate colors with emotions and experiences.",
      "Different colors trigger different psychological responses. Blue evokes trust and reliability—hence its popularity among financial institutions and tech companies. Red creates urgency and excitement, making it a favorite for sales and food brands. Green suggests growth, health, and sustainability.",
      "## Cultural Considerations",
      "One critical aspect often overlooked is the cultural dimension of color perception. White symbolizes purity in Western cultures but represents mourning in many Asian societies. Red signifies luck and prosperity in China but can signal danger or warning in other contexts.",
      "For global brands, understanding these nuances is essential. A color palette that works beautifully in one market may send entirely different messages in another. This is why many international brands develop flexible color systems that can adapt to local contexts while maintaining overall brand coherence.",
      "## Digital Age Implications",
      "The digital realm has introduced new considerations for color in branding. Screen technology affects how colors appear—what looks vibrant on one device may appear washed out on another. Accessibility has also become a crucial factor, with brands needing to ensure sufficient contrast for users with visual impairments.",
      "Dark mode preferences have prompted many brands to develop dual color systems, ensuring their identity remains strong whether displayed on light or dark backgrounds. This adaptability has become a mark of sophisticated brand design.",
      "## Building Your Color Strategy",
      "When developing a color strategy, start with your brand's core values and personality. What emotions do you want to evoke? What associations do you want to build? Then research your competitive landscape—differentiation matters. If every competitor uses blue, a well-chosen alternative color could help you stand out.",
      "Test your choices across all touchpoints: digital, print, merchandise, and environments. Consistency builds recognition, but ensure your colors work technically across all applications before committing.",
      "## The Bottom Line",
      "Color is not decoration—it's communication. The most successful brands treat color as a strategic asset, investing time and research into choices that will resonate with their target audience and support their business objectives for years to come."
    ],
    tags: ["Branding", "Design Psychology", "Color Theory", "Brand Strategy"]
  },
  "building-a-design-system-that-scales": {
    title: "Building a Design System That Scales",
    excerpt: "A comprehensive guide to creating design systems that grow with your organization.",
    category: "Design Process",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    author: {
      name: "Abdullah Al Noman",
      role: "COO & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "A design system is more than a collection of components—it's a living ecosystem that enables teams to build consistent, high-quality products at scale. But building one that actually works requires careful planning, clear governance, and a commitment to evolution.",
      "## Start With Principles, Not Components",
      "The mistake many teams make is jumping straight into building UI components. Instead, start with design principles—the foundational beliefs that will guide every decision. These principles should reflect your brand values and product philosophy.",
      "Principles like 'Clarity over cleverness' or 'Accessibility by default' provide a framework for resolving debates and making consistent decisions, even when the component library doesn't cover a specific use case.",
      "## The Token Foundation",
      "Design tokens are the atomic building blocks of your system: colors, typography scales, spacing units, shadows, and animation timings. Getting these right early pays dividends throughout the system's lifecycle.",
      "Invest in a robust token architecture that supports theming and multi-brand applications. Use semantic naming (e.g., 'color-text-primary' rather than 'color-gray-800') to enable flexibility without losing consistency.",
      "## Component Architecture",
      "When building components, think in terms of composition rather than configuration. Small, focused components that can be combined are more flexible than large, feature-heavy ones with numerous props.",
      "Document not just how to use each component, but why it exists and when to use it. Include examples of correct usage, edge cases, and anti-patterns. The goal is to empower designers and developers to make good decisions independently.",
      "## Governance and Evolution",
      "A design system without governance becomes a liability. Establish clear processes for proposing changes, reviewing contributions, and deprecating outdated patterns. Regular audits help identify inconsistencies and opportunities for improvement.",
      "Version your system thoughtfully. Breaking changes should be rare and well-communicated. Provide migration guides and sufficient transition periods for teams to update their implementations.",
      "## Adoption Strategy",
      "The best design system is useless if no one uses it. Focus on developer experience: excellent documentation, easy installation, and responsive support. Celebrate teams that adopt the system and showcase their successes.",
      "Track adoption metrics and gather feedback continuously. The system should evolve based on real usage patterns and pain points, not abstract ideals.",
      "## The Long Game",
      "Building a design system is a multi-year investment. Start small, prove value quickly, and expand based on organizational needs. Remember: the goal isn't a perfect system—it's enabling teams to build better products, faster."
    ],
    tags: ["Design Systems", "UI/UX", "Product Design", "Development"]
  },
  "the-future-of-performance-marketing": {
    title: "The Future of Performance Marketing",
    excerpt: "Explore emerging trends and technologies shaping the future of data-driven marketing.",
    category: "Design Strategies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    author: {
      name: "Md. Sajib Ahmed",
      role: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "Performance marketing stands at an inflection point. Privacy regulations, the death of third-party cookies, and evolving consumer expectations are forcing a fundamental rethinking of data-driven strategies.",
      "## The Privacy-First Reality",
      "GDPR, CCPA, and similar regulations worldwide have fundamentally changed what's possible in performance marketing. The era of ubiquitous tracking is ending, and marketers must adapt to a world where consent is paramount and data collection is limited.",
      "This isn't necessarily bad news. Brands that embrace privacy-first approaches are finding that quality trumps quantity—smaller, more engaged audiences often deliver better results than massive but poorly-targeted reach.",
      "## First-Party Data Renaissance",
      "With third-party data becoming increasingly restricted, first-party data has emerged as the new gold standard. Brands are investing heavily in strategies to collect, organize, and activate data from their own customer interactions.",
      "This shift requires new capabilities: robust data infrastructure, sophisticated customer data platforms, and creative approaches to encouraging users to share information willingly. The value exchange must be clear and compelling.",
      "## Contextual Comeback",
      "Contextual advertising—targeting based on content rather than user profiles—is experiencing a renaissance. Modern contextual tools use AI to understand content with unprecedented nuance, enabling relevant ad placement without personal data.",
      "The results are promising. Contextual campaigns are showing comparable or even superior performance to behavioral targeting in many categories, while providing a clear privacy-compliant path forward.",
      "## Measurement Evolution",
      "Attribution has always been complex, but the current environment makes it even more challenging. Multi-touch attribution models are giving way to more sophisticated approaches: marketing mix modeling, incrementality testing, and unified measurement frameworks.",
      "The key insight is that perfect attribution may be impossible—and that's okay. What matters is having sufficient confidence to make good allocation decisions, not mathematical certainty about every conversion.",
      "## The Human Element",
      "As automation handles more tactical execution, the human role in performance marketing is shifting toward strategy, creativity, and relationship building. The most successful performance marketers combine analytical rigor with creative intuition and genuine understanding of customer needs.",
      "## Preparing for Tomorrow",
      "The future belongs to marketers who can navigate complexity while maintaining focus on fundamentals: understanding customers, creating value, and measuring results. The tools will continue to evolve, but these principles remain constant."
    ],
    tags: ["Performance Marketing", "Digital Advertising", "Privacy", "Analytics"]
  },
  "crafting-compelling-brand-stories": {
    title: "Crafting Compelling Brand Stories",
    excerpt: "Master the art of storytelling to create emotional connections with your target audience.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&h=600&fit=crop",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    author: {
      name: "Sabiha Sultana",
      role: "Content Writer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "In a world saturated with content, brands that tell compelling stories rise above the noise. Story isn't just a marketing tactic—it's how humans make sense of the world and form emotional connections.",
      "## Why Stories Work",
      "Neuroscience has shown that stories activate multiple areas of the brain simultaneously. When we hear a story, we don't just process information—we experience it. This creates stronger memories and deeper emotional connections than factual presentations alone.",
      "For brands, this means stories can communicate values, build trust, and inspire action in ways that product features and statistics cannot.",
      "## The Elements of Brand Story",
      "Every compelling brand story contains certain elements: a protagonist (often the customer, not the brand), a challenge or desire, transformation or resolution, and stakes that matter. The brand's role is typically that of guide or enabler, not hero.",
      "This structure—known as the 'hero's journey' in various forms—resonates across cultures because it mirrors the shape of human experience itself.",
      "## Finding Your Story",
      "Your brand story should emerge from genuine truth: your founding motivation, the problem you solve, the change you want to see in the world. Manufactured stories ring false; authentic ones resonate.",
      "Interview founders, employees, and customers. Look for patterns in why people choose your brand and what they experience as a result. The story is already there—your job is to uncover and articulate it.",
      "## Telling Stories Across Channels",
      "A great brand story isn't told once—it's expressed consistently across every touchpoint. From your website's About page to social media posts to customer service interactions, every element should reinforce the core narrative.",
      "This doesn't mean saying the same thing everywhere. Different channels and contexts call for different aspects of your story. The key is coherence: every piece should feel like it comes from the same source.",
      "## Evolving Your Story",
      "Brand stories aren't static. As your company grows, your market changes, and your understanding deepens, your story should evolve too. The core truths remain, but their expression adapts to new realities.",
      "Regular story audits help ensure your narrative remains relevant and authentic. Ask: Does this still reflect who we are and who we serve? Does it differentiate us from competitors? Does it inspire the actions we want?",
      "## The Courage to Be Different",
      "The most memorable brand stories are distinctive. They don't try to appeal to everyone or say what's expected. They take a point of view and commit to it.",
      "This requires courage, but the alternative—a bland, forgettable story—is far more dangerous in a crowded market. The brands that thrive are those brave enough to stand for something meaningful."
    ],
    tags: ["Storytelling", "Branding", "Content Strategy", "Marketing"]
  },
  "design-principles-for-conversion-optimization": {
    title: "Design Principles for Conversion Optimization",
    excerpt: "Apply proven design principles to increase your website's conversion rates.",
    category: "Design Principles",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    author: {
      name: "Abdullah Al Noman",
      role: "COO & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    content: [
      "Conversion optimization isn't about tricks or manipulation—it's about removing friction and clearly communicating value. The best-converting designs are often the clearest and most user-focused.",
      "## Clarity Above All",
      "The single most important principle for conversion is clarity. Users should immediately understand what you offer, why it matters to them, and what they should do next. Confusion is the enemy of conversion.",
      "This means ruthless prioritization. Every page should have a primary goal, and everything on that page should support that goal. Secondary actions and information should be present but not competing for attention.",
      "## Visual Hierarchy Drives Action",
      "Eye-tracking studies consistently show that users scan pages in predictable patterns. Effective conversion design works with these patterns, placing key information and calls-to-action where eyes naturally go.",
      "Size, color, contrast, and whitespace all contribute to hierarchy. Make your primary CTA visually prominent—larger, more colorful, with generous spacing around it. Secondary options should be clearly subordinate.",
      "## Reducing Cognitive Load",
      "Every decision point creates friction. The more choices you present, the harder you make it to choose. Simplify wherever possible: fewer form fields, clearer option distinctions, obvious default choices.",
      "Progressive disclosure can help manage complexity. Show only what's needed at each step, revealing additional options only when relevant. This keeps the immediate task manageable while preserving flexibility.",
      "## Building Trust",
      "Conversion requires trust, and trust must be earned visually. Professional design quality signals competence. Social proof—testimonials, client logos, usage statistics—demonstrates that others have trusted you.",
      "Security indicators matter for transactions. Familiar payment logos, SSL certificates, and clear privacy statements reduce the perceived risk of action.",
      "## Mobile-First Thinking",
      "With mobile traffic dominating most industries, conversion optimization must prioritize mobile experience. This means touch-friendly buttons, legible text without zooming, and streamlined flows that work on small screens.",
      "Forms deserve special attention on mobile. Each field is more burdensome with a touch keyboard, so every unnecessary field costs you conversions. Consider alternatives like social login or saved information.",
      "## Testing and Iteration",
      "Design principles provide a starting point, but real optimization requires testing. A/B tests reveal what actually works with your specific audience—sometimes contradicting conventional wisdom.",
      "Test one element at a time when possible, and ensure sufficient sample sizes for statistical significance. Document learnings and build institutional knowledge over time.",
      "## The Holistic View",
      "Conversion isn't just about the landing page—it's the entire journey from first touch to completed action. Ensure consistency and coherence across every step. A compelling ad that leads to a confusing page wastes budget and frustrates users."
    ],
    tags: ["UX Design", "Conversion Rate Optimization", "Web Design", "User Experience"]
  }
};

// Related posts helper
const getRelatedPosts = (currentSlug: string, currentCategory: string) => {
  return Object.entries(blogPostsData)
    .filter(([slug, post]) => slug !== currentSlug && post.category === currentCategory)
    .slice(0, 3)
    .map(([slug, post]) => ({ slug, ...post }));
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#253e35' }}>
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-dela text-4xl text-[#F8FFE8] mb-4">Post Not Found</h1>
            <p className="text-[rgba(248,255,232,0.7)] mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/blog")} className="bg-[#E2FEA5] text-[#253e35]">
              Back to Blog
            </Button>
          </div>
        </main>
        <EnhancedFooter />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(slug!, post.category);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({ title: "Link copied!", description: "The article link has been copied to your clipboard." });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#253e35' }}>
      <Header />

      {/* Hero Banner */}
      <section className="pt-24 relative">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#253e35]/50 via-transparent to-[#253e35]" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl"
              >
                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold font-bricolage mb-4"
                  style={{ backgroundColor: '#E2FEA5', color: '#0a0a0a' }}
                >
                  {post.category}
                </span>
                <h1 className="font-dela text-3xl md:text-4xl lg:text-5xl text-[#F8FFE8] uppercase mb-4">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button & Meta */}
      <section className="py-8 px-4 border-b border-[rgba(226,254,165,0.1)]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-[#E2FEA5] transition-colors w-fit"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 text-sm font-bricolage"
              style={{ color: 'rgba(248, 255, 232, 0.6)' }}
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

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose-lg"
              >
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 
                        key={index} 
                        className="font-dela text-2xl md:text-3xl text-[#E2FEA5] mt-12 mb-6 uppercase"
                      >
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  return (
                    <p 
                      key={index} 
                      className="text-lg leading-relaxed mb-6 font-bricolage"
                      style={{ color: 'rgba(248, 255, 232, 0.85)' }}
                    >
                      {paragraph}
                    </p>
                  );
                })}

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-[rgba(226,254,165,0.1)]">
                  <p className="text-sm font-medium mb-4" style={{ color: 'rgba(248, 255, 232, 0.5)' }}>
                    Tags:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-bricolage"
                        style={{ 
                          backgroundColor: 'rgba(226, 254, 165, 0.1)',
                          color: '#E2FEA5',
                          border: '1px solid rgba(226, 254, 165, 0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar - Share & Author */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-64 space-y-8"
              >
                {/* Share */}
                <div 
                  className="p-6 rounded-2xl sticky top-32"
                  style={{ 
                    backgroundColor: 'rgba(248, 255, 232, 0.03)',
                    border: '1px solid rgba(226, 254, 165, 0.1)'
                  }}
                >
                  <p className="font-dela text-lg text-[#F8FFE8] mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-[#E2FEA5]" />
                    Share Article
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: 'rgba(226, 254, 165, 0.1)' }}
                    >
                      <Twitter className="w-5 h-5 text-[#E2FEA5]" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: 'rgba(226, 254, 165, 0.1)' }}
                    >
                      <Linkedin className="w-5 h-5 text-[#E2FEA5]" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: 'rgba(226, 254, 165, 0.1)' }}
                    >
                      <Facebook className="w-5 h-5 text-[#E2FEA5]" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: 'rgba(226, 254, 165, 0.1)' }}
                    >
                      <LinkIcon className="w-5 h-5 text-[#E2FEA5]" />
                    </button>
                  </div>

                  {/* Author */}
                  <div className="mt-8 pt-6 border-t border-[rgba(226,254,165,0.1)]">
                    <p className="text-sm mb-4" style={{ color: 'rgba(248, 255, 232, 0.5)' }}>
                      Written by
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-dela text-[#F8FFE8]">{post.author.name}</p>
                        <p className="text-sm font-bricolage" style={{ color: 'rgba(248, 255, 232, 0.5)' }}>
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4" style={{ backgroundColor: '#173229' }}>
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <p className="uppercase tracking-[0.3em] text-sm mb-4 font-bricolage" style={{ color: '#E2FEA5' }}>
                  Keep Reading
                </p>
                <h2 className="text-3xl md:text-4xl font-dela text-[#F8FFE8]">
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
                          backgroundColor: 'rgba(248, 255, 232, 0.03)',
                          border: '1px solid rgba(226, 254, 165, 0.1)'
                        }}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <p className="text-sm mb-2 font-bricolage" style={{ color: 'rgba(248, 255, 232, 0.5)' }}>
                            {relatedPost.date} • {relatedPost.readTime}
                          </p>
                          <h3 className="font-dela text-lg text-[#F8FFE8] group-hover:text-[#E2FEA5] transition-colors">
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

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#1e3c30' }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-dela text-3xl md:text-4xl text-[#F8FFE8] uppercase mb-6">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-lg font-bricolage mb-8" style={{ color: 'rgba(248, 255, 232, 0.7)' }}>
                Let's discuss how we can help you achieve your marketing goals.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="group rounded-full px-10 py-7 text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: '#FCFAC2',
                  color: '#0a0a0a',
                  border: '3px solid #0a0a0a',
                  boxShadow: '0 4px 0 #0a0a0a'
                }}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <EnhancedFooter showCTA={false} />
    </div>
  );
};

export default BlogPost;
