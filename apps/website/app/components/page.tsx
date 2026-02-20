"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground"; 
import { FadeIn } from "@/components/FadeIn"; 

const components = [
  { id: "spinners", name: "Spinners", icon: "◐", description: "Loading animations", count: 5 },
  { id: "textinput", name: "Text Input", icon: "﹥", description: "Input fields & forms", count: 3 },
  { id: "cards", name: "Cards", icon: "□", description: "Container components", count: 6 },
  { id: "select", name: "Select", icon: "▼", description: "Selection inputs", count: 3 },
  { id: "backgrounds", name: "Backgrounds", icon: "░", description: "Animated effects", count: 2 },
  { id: "animatedtext", name: "Animated Text", icon: "A", description: "Text animations", count: 4 },
  { id: "notifications", name: "Notifications", icon: "!", description: "Toasts & alerts", count: 4 },
  { id: "dashboards", name: "Dashboards", icon: "▦", description: "System monitors", count: 6 },
  { id: "buttons", name: "Buttons", icon: "○", description: "Interactive button components", count: 6 },
  { id: "progress", name: "Progress Bars", icon: "║", description: "Progress indicators", count: 3 },
  { id: "badges", name: "Badges", icon: "*", description: "Status indicators", count: 3 },
  { id: "charts", name: "Charts", icon: "📈", description: "Data visualization", count: 2 },
  { id: "trees", name: "Trees", icon: "⑂", description: "Hierarchical data", count: 2 },
  { id: "tabs", name: "Tabs", icon: "═", description: "Tabbed navigation", count: 3 },
  { id: "table", name: "Table", icon: "田", description: "Scrollable data grid", count: 1 },
  { id: "multiselect", name: "Multi-Select", icon: "☑", description: "Multiple item selection", count: 1 },
];

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || "http://localhost:3001";

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = components.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="font-mono min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#09090b] dark:text-slate-50 selection:bg-emerald-500/30 relative flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] dark:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] opacity-20" />
        <div
          className="absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full flex-grow">
        {/* --- SYSTEM HEADER --- */}
        <div className="mb-12 border-b-2 border-slate-200 dark:border-white/10 pb-8 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500/50 dark:border-emerald-400/50"></div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="animate-pulse h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400/80 tracking-widest uppercase">
                  System_Online
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-slate-800 to-emerald-600 dark:from-emerald-400 dark:via-white dark:to-emerald-400 tracking-tight drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                COMPONENT_LIB
              </h1>

              {/* Retro Navigation Links */}
              <div className="mt-6 flex gap-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  [ ROOT ]
                </Link>
                <Link href="/docs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  [ MANUAL ]
                </Link>
                <Link href="/themes" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  [ THEMES ]
                </Link>
              </div>
            </div>

            {/* Stats & Search Box */}
            <div className="flex flex-col gap-4 min-w-[300px]">
              {/* Stats */}
              <div className="border border-slate-200 bg-white/50 dark:border-white/10 dark:bg-black/50 p-3 backdrop-blur-md rounded-lg shadow-sm">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-bold mb-2">
                  <span>MEMORY_ALLOC</span>
                  <span>64K</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-1">
                  <div className="bg-emerald-500 dark:bg-emerald-400 h-full w-[45%] animate-pulse rounded-full"></div>
                </div>
              </div>

              {/* CLI Search Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-emerald-600 dark:text-emerald-400 font-bold pointer-events-none">
                  $&gt;
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="filter_modules..."
                  className="w-full rounded-lg bg-white/80 border-2 border-slate-200 py-2.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 placeholder-slate-400 font-bold text-sm transition-all shadow-sm dark:bg-black/80 dark:border-white/10 dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 dark:placeholder-slate-600 backdrop-blur-md"
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
                className="group relative h-full flex flex-col overflow-hidden rounded-xl border-2 border-slate-200 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-white hover:shadow-xl dark:border-white/5 dark:bg-black/40 dark:hover:border-emerald-400 dark:hover:bg-black/80 dark:hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] backdrop-blur-md"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    [↗]
                  </span>
                </div>

                <div className="flex items-start justify-between mb-5">
                  <div className="h-14 w-14 flex items-center justify-center rounded-lg border-2 border-slate-100 bg-slate-50 text-2xl text-slate-700 group-hover:scale-110 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:border-emerald-400/30 dark:group-hover:bg-emerald-400/10 dark:group-hover:text-emerald-400 shadow-sm">
                    {component.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 border-2 border-slate-100 rounded px-2 py-1 dark:text-slate-500 dark:border-white/10">
                    ID: {component.count.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                  {component.name}
                </h3>

                <p className="text-sm text-slate-500 line-clamp-2 group-hover:text-slate-700 transition-colors dark:text-slate-400 dark:group-hover:text-slate-300">
                  {component.description}
                </p>

                {/* Animated Bottom Scanline */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full dark:bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredComponents.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-slate-300 rounded-2xl mt-8 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-black/50">
            <p className="text-red-500 dark:text-red-400 font-bold text-xl mb-2 flex items-center justify-center gap-2">
              <span className="animate-pulse">⚠</span> ERROR: MODULE_NOT_FOUND
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Query "{searchQuery}" returned 0 results.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-emerald-600 hover:text-emerald-700 font-bold border-2 border-emerald-600/20 px-6 py-2 rounded-lg transition-all hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400/20 dark:hover:text-emerald-300 dark:hover:bg-emerald-400/10"
            >
              [ RESET_SEARCH ]
            </button>
          </div>
        )}
      </div>

      {/* --- RETRO FOOTER --- */}
      <footer className="border-t-2 border-slate-200 bg-white/80 dark:border-white/10 dark:bg-[#050505]/90 relative z-10 mt-auto backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            {/* Branding Column */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-5 bg-emerald-500 dark:bg-emerald-400 rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <span className="font-black text-xl text-slate-900 dark:text-white tracking-widest">
                  SIDDCN
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-6 leading-relaxed">
                High-performance TUI components.
                <br />
                Built for the React Ink ecosystem.
                <br />
                MIT License.
              </p>
              <div className="text-xs font-bold text-slate-400 dark:text-slate-600">
                EST. 2026 // SYSTEM_ID: #8821
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 uppercase tracking-wider border-b-2 border-emerald-500/20 pb-2 w-fit">
                Directory
              </h4>
              <ul className="space-y-3 font-medium">
                <li><Link href="/" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">Home</Link></li>
                <li><Link href="/components" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">Components</Link></li>
                <li><Link href="/themes" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">Themes</Link></li>
                <li><Link href="/docs/cli" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">CLI</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="text-emerald-600 dark:text-emerald-400 font-bold mb-4 uppercase tracking-wider border-b-2 border-emerald-500/20 pb-2 w-fit">
                Network
              </h4>
              <ul className="space-y-3 font-medium">
                <li><a href="https://github.com/sidgaikwad/siddcn" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">GitHub</a></li>
                <li><a href="https://npmjs.com/package/siddcn" className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">NPM</a></li>
                <li><a href={`${DOCS_URL}/docs`} className="text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block dark:text-slate-400 dark:hover:text-emerald-400">Docs</a></li>
              </ul>
            </div>
          </div>

          {/* Status Bar Footer */}
          <div className="mt-12 border-t-2 border-slate-200 dark:border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-400 dark:text-slate-500">
            <div>COPYRIGHT © {new Date().getFullYear()} SIDDCN</div>
            <div className="flex gap-6 mt-4 md:mt-0 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-full">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SERVER: ONLINE
              </span>
              <span>LAT: 14ms</span>
              <span>VER: 2.0.4</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}