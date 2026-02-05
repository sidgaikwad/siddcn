"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
    { href: `${DOCS_URL}/docs`, label: "Docs", external: true },
    { href: "/themes", label: "Themes" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "border-white/10 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* --- LEFT: LOGO --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image
              src="/icon.png"
              alt="siddcn logo"
              width={32}
              height={32}
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="font-bold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">
            siddcn
          </span>
        </Link>

        {/* --- CENTER: NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-md">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredPath === link.href && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/10"
                    layoutId="navbar-hover"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    layoutId="navbar-active"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* --- RIGHT: SOCIALS --- */}
        <div className="flex items-center gap-3">
          {/* X (Twitter) */}
          <a
            href="https://x.com/_sidd24_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-105"
            aria-label="X (Twitter)"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sidgaikwad/siddcn"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-105"
            aria-label="GitHub"
          >
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
