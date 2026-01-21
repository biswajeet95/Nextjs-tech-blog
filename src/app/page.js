
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { blogs } from "../data/blogs";

export default function Home() {
  const latestBlogs = blogs.slice(0, 3); // show only 3

  return (
    <main>
      <Hero />

      <section className="container" style={{ marginBottom: "6rem" }}>
        {/* Section Heading */}
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          color: "#111",
        }}>
          Latest Blogs
        </h2>

        {/* Optional Subheading */}
        <p style={{
          fontSize: "1.1rem",
          color: "#555",
          marginBottom: "2rem",
        }}>
          Check out our most recent articles on React, Next.js, JavaScript and more.
        </p>

        {/* Blog Grid */}
        <div
          className="blog-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {/* See More Button */}
        <div className="center" style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/blog"
            className="see-more"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#0070f3",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            See More Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
