import BlogArchive from "@/components/sections/blog/BlogArchive";
import {
  ALL_BLOGS_CATEGORY,
  getBlogCategorySeo,
  getBlogPostsByCategory,
} from "@/data/blogs";

const Blog = () => {
  const seo = getBlogCategorySeo(ALL_BLOGS_CATEGORY);

  return (
    <BlogArchive
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
      canonical={seo.canonical}
      url={seo.url}
      heroLabel={seo.heroLabel}
      heroTitle={seo.heroTitle}
      posts={getBlogPostsByCategory(ALL_BLOGS_CATEGORY)}
      activeCategory={ALL_BLOGS_CATEGORY}
    />
  );
};

export default Blog;
