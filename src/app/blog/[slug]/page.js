

import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";

// Helper function to generate Table of Contents from H2/H3
function generateTOC(html) {
  const regex = /<h([2-3])>(.*?)<\/h[2-3]>/g;
  const toc = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[2];
    const id = text.toLowerCase().replace(/\s+/g, "-");
    toc.push({ text, id, level: match[1] });
  }
  return toc;
}

// Generate static params for all blogs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Dynamic metadata for SEO + social sharing
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | IQra Consultancy",
      description: "Requested blog does not exist",
      metadataBase: new URL("https://iqraconsultancy.in"),
    };
  }

  return {
    title: `${blog.title} | IQra Consultancy`,
    description: blog.description,
    metadataBase: new URL("https://iqraconsultancy.in"),
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://iqraconsultancy.in/blog/${blog.slug}`,
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

// Main Blog Page Component
export default async function BlogPage({ params }) {
  const { slug } = await params; // ✅ unwrap promise
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    author: {
      "@type": "Person",
      name: "Biswajeett",
    },
    publisher: {
      "@type": "Organization",
      name: "IQra Consultancy",
    },
    datePublished: blog.date || "2025-01-01",
    dateModified: blog.date || "2025-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iqraconsultancy.in/blog/${blog.slug}`,
    },
  };

  // Table of Contents
  const toc = generateTOC(blog.content);

  // Add IDs to headings for TOC links
  const contentWithIds = blog.content.replace(
    /<h([2-3])>(.*?)<\/h[2-3]>/g,
    (match, level, text) => {
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  return (
    <main className="blog-page">
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://iqraconsultancy.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://iqraconsultancy.in/blog" },
              { "@type": "ListItem", position: 3, name: blog.title, item: `https://iqraconsultancy.in/blog/${slug}` },
            ],
          }),
        }}
      />

      <article className="blog-content">
        {/* Blog Title */}
        <h1 className="blog-title">{blog.title}</h1>

        {/* Table of Contents */}
        {toc.length > 0 && (
          <aside className="toc">
            <h3>Table of Contents</h3>
            <ul>
              {toc.map((item, i) => (
                <li key={i} className={`toc-level-${item.level}`}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Blog Cover Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />

        {/* Blog Content */}
        <section
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: contentWithIds }}
        />

        {/* Author Box (No image) */}
        <div className="author-box">
          <div className="author-info">
            <h3>Biswajeett</h3>
            <p>
              Founder of <strong>IQra Consultancy</strong>. React & Next.js developer passionate about education, career guidance, and technology.
            </p>
            <div className="author-links">
              <a href="/about" aria-label="About Author">About</a>
              <a href="/contact" aria-label="Contact Author">Contact</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
