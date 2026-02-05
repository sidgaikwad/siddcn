"use client";

import Link from "next/link";
import { Wordmark } from "./WordMark";
// Define the Docs URL with a fallback
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 pt-16 pb-8 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110">
                <span className="text-lg font-bold text-black">S</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                siddcn
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              The ultimate Terminal UI component library for modern developers.
              Build beautiful CLIs in minutes.
            </p>
          </div>

          {/* Links Columns */}
          {[
            {
              title: "Documentation",
              links: [
                { label: "Introduction", href: `${DOCS_URL}/docs` },
                {
                  label: "Installation",
                  href: `${DOCS_URL}/docs/installation`,
                },
                { label: "Components", href: "/components" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Component Library", href: "/components" },
                {
                  label: "Add Components",
                  href: `${DOCS_URL}/docs/adding-components`,
                },
                { label: "Themes", href: "/themes" },
              ],
            },
            {
              title: "Community",
              links: [
                {
                  label: "GitHub",
                  href: "https://github.com/sidgaikwad/siddcn",
                },
                { label: "NPM", href: "https://npmjs.com/package/siddcn" },
                { label: "Discord", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-6 text-sm font-semibold text-white tracking-wider uppercase opacity-80">
                {col.title}
              </h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 -ml-3 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright + Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 mb-8">
          <p>Built with React Ink. MIT License.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs">
            <span>© {new Date().getFullYear()} siddcn</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>

      {/* --- THE WORDMARK ANIMATION --- */}
      {/* Positioned at the very bottom of the footer */}
      <div className="relative w-full opacity-50 hover:opacity-100 transition-opacity duration-500">
        <Wordmark />
      </div>
    </footer>
  );
}
