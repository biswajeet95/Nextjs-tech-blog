

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            IQra Consultancy
          </Link>

          {/* Desktop Links */}
          <div className="desktop-links">
            <Link href="/blog">Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/privacy-policy" onClick={() => setOpen(false)}>Privacy</Link>
        <Link href="/terms" onClick={() => setOpen(false)}>Terms</Link>
      </aside>
    </>
  );
}
