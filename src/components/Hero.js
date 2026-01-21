import Link from "next/link";


export default function Hero() {
    return (
        <section className="hero">
            <h1>Learn Modern Web Development</h1>
            <p>Simple & beginner‑friendly blogs on React, Next.js & JavaScript.</p>
            <Link href="/blog" className="hero-btn">Explore Blogs</Link>
        </section>
    );
}