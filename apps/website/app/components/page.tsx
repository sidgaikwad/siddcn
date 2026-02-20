"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground"; // Assuming you have this from previous steps
import { FadeIn } from "@/components/FadeIn"; // Assuming you have this

// Full Data
const components = [
  {
    id: "spinners",
    name: "Spinners",
    icon: "◐",
    description: "Loading animations",
    count: 5,
  },
  {
    id: "textinput",
    name: "Text Input",
    icon: "﹥",
    description: "Input fields & forms",
    count: 3,
  },
  {
    id: "cards",
    name: "Cards",
    icon: "□",
    description: "Container components",
    count: 6,
  },
  {
    id: "select",
    name: "Select",
    icon: "▼",
    description: "Selection inputs",
    count: 3,
  },
  {
    id: "backgrounds",
    name: "Backgrounds",
    icon: "░",
    description: "Animated effects",
    count: 2,
  },
  {
    id: "animatedtext",
    name: "Animated Text",
    icon: "A",
    description: "Text animations",
    count: 4,
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: "!",
    description: "Toasts & alerts",
    count: 4,
  },
  {
    id: "dashboards",
    name: "Dashboards",
    icon: "▦",
    description: "System monitors",
    count: 6,
  },
  {
    id: "buttons",
    name: "Buttons",
    icon: "○",
    description: "Interactive button components",
    count: 6,
  },
  {
    id: "progress",
    name: "Progress Bars",
    icon: "║",
    description: "Progress indicators",
    count: 3,
  },
  {
    id: "badges",
    name: "Badges",
    icon: "*",
    description: "Status indicators",
    count: 3,
  },
  {
    id: "charts",
    name: "Charts",
    icon: "📈",
    description: "Data visualization",
    count: 2,
  },
  {
    id: "trees",
    name: "Trees",
    icon: "⑂",
    description: "Hierarchical data",
    count: 2,
  },
  {
    id: "tabs",
    name: "Tabs",
    icon: "═",
    description: "Tabbed navigation",
    count: 3,
  },
  {
    id: "table",
    name: "Table",
    icon: "田",
    description: "Scrollable data grid",
    count: 1,
  },
  {
    id: "multiselect",
    name: "Multi-Select",
    icon: "☑",
    description: "Multiple item selection",
    count: 1,
  },
];

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001";

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = components.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] font-mono text-zinc-900 dark:text-zinc-300 selection:bg-emerald-200 dark:bg-emerald-400/20 selection:text-black relative flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] opacity-20" />
        <div
          className="absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 border-emerald-400 dark:border-emerald-500/30/5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full flex-grow">
        {/* --- SYSTEM HEADER (Preserved Structure) --- */}
        <div className="mb-12 border-b-2 border-emerald-400 dark:border-emerald-500/30/20 pb-8 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-400 dark:border-emerald-500/30 opacity-50"></div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="animate-pulse h-2 w-2 rounded-full bg-emerald-200 dark:bg-emerald-400/20 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400/70 tracking-widest">
                  SYSTEM_ONLINE
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-terminal-cyan via-white to-terminal-cyan tracking-tight font-mono drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                COMPONENT_LIB
              </h1>

              {/* Retro Navigation Links */}
              <div className="mt-6 flex gap-4 text-sm font-bold text-zinc-900 dark:text-zinc-300/60">
                <Link
                  href="/"
                  className="hover:text-emerald-600 dark:text-emerald-400 transition-colors"
                >
                  [ ROOT ]
                </Link>
                <Link
                  href="/docs"
                  className="hover:text-emerald-600 dark:text-emerald-400 transition-colors"
                >
                  [ MANUAL ]
                </Link>
                <Link
                  href="/themes"
                  className="hover:text-emerald-600 dark:text-emerald-400 transition-colors"
                >
                  [ THEMES ]
                </Link>
              </div>
            </div>

            {/* Stats & Search Box */}
            <div className="flex flex-col gap-4 min-w-[300px]">
              {/* Stats */}
              <div className="border border-emerald-400 dark:border-emerald-500/30/20 bg-white/50 dark:bg-black/50 p-3 backdrop-blur-sm">
                <div className="flex justify-between text-xs text-zinc-900 dark:text-zinc-300/50 font-mono mb-2">
                  <span>MEMORY</span>
                  <span>64K</span>
                </div>
                <div className="w-full bg-zinc-900 dark:bg-zinc-100/10 h-1 mb-2">
                  <div className="bg-emerald-200 dark:bg-emerald-400/20 h-full w-[45%] animate-pulse"></div>
                </div>
              </div>

              {/* CLI Search Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600 dark:text-emerald-400 font-bold pointer-events-none">
                  &gt;_
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="filter_modules..."
                  className="w-full bg-white/80 dark:bg-black/80 border border-zinc-400 dark:border-zinc-700/20 py-2 pl-10 pr-4 text-zinc-900 dark:text-zinc-300 focus:outline-none focus:border-emerald-400 dark:border-emerald-500/30 focus:ring-1 focus:ring-terminal-cyan placeholder-terminal-text/30 font-mono text-sm transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredComponents.map((component, idx) => (
            <FadeIn key={component.id} delay={idx * 30} direction="up">
              <Link
                href={`/components/${component.id}`}
                className="group relative h-full flex flex-col overflow-hidden border border-emerald-400 dark:border-emerald-500/30/10 bg-zinc-50 dark:bg-[#0c0c0c]/40 p-6 transition-all duration-300 hover:border-emerald-400 dark:border-emerald-500/30 hover:bg-white dark:bg-black hover:shadow-[0_0_20px_-5px_rgba(0,255,255,0.2)]"
              >
                {/* Corner Accents (Hidden by default, visible on hover) */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    [↗]
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-400 dark:border-emerald-500/30/0 group-hover:border-emerald-400 dark:border-emerald-500/30 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-400 dark:border-emerald-500/30/0 group-hover:border-emerald-400 dark:border-emerald-500/30 transition-colors"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-sm border border-emerald-400 dark:border-emerald-500/30/20 bg-emerald-200 dark:bg-emerald-400/20/5 text-2xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-200 dark:bg-emerald-400/20/10 transition-all duration-300">
                    {component.icon}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-900 dark:text-zinc-300/40 border border-zinc-400 dark:border-zinc-700/10 px-1.5 py-0.5">
                    ID: {component.count.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-300 group-hover:text-emerald-600 dark:text-emerald-400 transition-colors font-mono">
                  {component.name}
                </h3>

                <p className="text-sm text-zinc-900 dark:text-zinc-300/60 font-mono line-clamp-2 group-hover:text-zinc-900 dark:text-zinc-300/80">
                  {component.description}
                </p>

                {/* Animated Bottom Scanline */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-200 dark:bg-emerald-400/20 transition-all duration-500 group-hover:w-full shadow-[0_0_10px_#0ff]" />
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredComponents.length === 0 && (
          <div className="py-20 text-center border border-dashed border-zinc-400 dark:border-zinc-700/20 mt-8">
            <p className="text-red-600 dark:text-red-400 font-mono text-lg">
              ERROR: MODULE_NOT_FOUND
            </p>
            <p className="text-zinc-900 dark:text-zinc-300/40 text-sm mt-2">
              Query "{searchQuery}" returned 0 results.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
            >
              [ RESET_SEARCH ]
            </button>
          </div>
        )}
      </div>

      {/* --- RETRO FOOTER --- */}
      <footer className="border-t-2 border-emerald-400 dark:border-emerald-500/30/20 bg-zinc-100 dark:bg-[#050505] relative z-10 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm">
            {/* Branding Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-emerald-200 dark:bg-emerald-400/20"></div>
                <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-widest">
                  SIDDCN
                </span>
              </div>
              <p className="text-zinc-900 dark:text-zinc-300/50 max-w-xs mb-6">
                High-performance TUI components.
                <br />
                Built for the React Ink ecosystem.
                <br />
                MIT License.
              </p>
              <div className="text-xs text-zinc-900 dark:text-zinc-300/30">
                EST. 2026 // SYSTEM_ID: #8821
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 uppercase tracking-wider border-b border-emerald-400 dark:border-emerald-500/30/20 pb-1 w-fit">
                Directory
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/themes"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    Themes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/cli"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    CLI
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 uppercase tracking-wider border-b border-emerald-400 dark:border-emerald-500/30/20 pb-1 w-fit">
                Network
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/sidgaikwad/siddcn"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://npmjs.com/package/siddcn"
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    NPM
                  </a>
                </li>
                <li>
                  <a
                    href={`${DOCS_URL}/docs`}
                    className="text-zinc-900 dark:text-zinc-300/60 hover:text-zinc-900 dark:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {" "}
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Status Bar Footer */}
          <div className="mt-12 border-t border-zinc-400 dark:border-zinc-700/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-900 dark:text-zinc-300/40 font-mono">
            <div>COPYRIGHT © {new Date().getFullYear()} SIDDCN</div>
            <div className="flex gap-6 mt-2 md:mt-0">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500/50"></span>{" "}
                SERVER: ONLINE
              </span>
              <span>LATENCY: 14ms</span>
              <span>VER: 2.0.4</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
