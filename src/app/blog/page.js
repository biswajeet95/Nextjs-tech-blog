

import BlogCard from "../../components/BlogCard";
import { blogs } from "../../data/blogs";

export const metadata = {
  title: "All Blogs | Tech Blog",
  description: "Browse all tech blogs on React, Next.js and JavaScript",
};

export default function BlogListPage() {
  return (
    <main className="container" style={{ marginBottom: "4rem" }}>
      {/* Page Heading */}
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        color: "#111",
      }}>
        All Blogs
      </h1>

      {/* Optional Description */}
      <p style={{
        fontSize: "1.1rem",
        color: "#555",
        marginBottom: "2rem",
      }}>
        Explore our latest articles on React, Next.js, JavaScript and more. Learn, implement, and level up your skills!
      </p>

      {/* Blog Cards Grid */}
      <div
        className="blog-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
