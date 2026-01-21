import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="card-image image-wrapper">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="img"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
         
        />
      </div>

      <div className="card-content">
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <Link href={`/blog/${blog.slug}`}>Read More →</Link>
      </div>
    </div>
  );
}


