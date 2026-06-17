import { Navigate, useParams } from "react-router-dom";
import BlogArchive from "@/components/sections/blog/BlogArchive";
import {
  getBlogCategoryBySlug,
  getBlogCategorySeo,
  getBlogPostsByCategory,
} from "@/data/blogs";

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  if (!categorySlug) {
    return <Navigate to="/blog" replace />;
  }

  const category = getBlogCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const seo = getBlogCategorySeo(category);

  return (
    <BlogArchive
      title={seo.title}
      description={seo.description}
      keywords={seo.keywords}
      canonical={seo.canonical}
      url={seo.url}
      heroLabel={seo.heroLabel}
      heroTitle={seo.heroTitle}
      posts={getBlogPostsByCategory(category)}
      activeCategory={category}
    />
  );
};

export default BlogCategory;
