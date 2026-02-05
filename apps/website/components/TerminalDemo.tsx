"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Grid Items Data matching your screenshot
const GRID_ITEMS = [
  { id: "btn", label: "Buttons", desc: "Styled variants", icon: "◉" },
  { id: "sel", label: "Select", desc: "Single-select", icon: "◎" },
  { id: "mul", label: "Multi-Select", desc: "Checkboxes", icon: "☑" },
  { id: "txt", label: "Text Input", desc: "Live typing", icon: "✎" },
  { id: "tre", label: "Tree", desc: "Hierarchy", icon: "◫" },
  { id: "tab", label: "Tabs", desc: "Tab interface", icon: "⊟" },
  { id: "tbl", label: "Table", desc: "Data grid", icon: "▦" },
  { id: "crd", label: "Cards", desc: "Panel layout", icon: "◇" },
  { id: "bdg", label: "Badges", desc: "Status tags", icon: "◆" },
];

export function TerminalDemo() {
  const [view, setView] = useState<"boot" | "grid">("boot");
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Boot Sequence Animation
  useEffect(() => {
    if (view === "grid") return;

    const bootSequence = [
      { text: "$ siddcn", delay: 500 },
      { text: "Initializing core...", delay: 800 },
      { text: "Loading registry [████████] 100%", delay: 800 },
      { text: "Compiling assets...", delay: 600 },
      { text: "Launching grid view...", delay: 600 },
    ];

    let timeouts: NodeJS.Timeout[] = [];
    let accumulatedDelay = 0;

    bootSequence.forEach(({ text, delay }, index) => {
      accumulatedDelay += delay;
      const timeout = setTimeout(() => {
        setBootLines((prev) => [...prev, text]);
        // Switch to grid view after last line
        if (index === bootSequence.length - 1) {
          setTimeout(() => setView("grid"), 800);
        }
      }, accumulatedDelay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [view]);

  // Grid Navigation Animation
  useEffect(() => {
    if (view !== "grid") return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % GRID_ITEMS.length);
    }, 1200); // Move selection every 1.2s

    return () => clearInterval(interval);
  }, [view]);

  return (
    <div className="relative mx-auto max-w-4xl group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3 bg-white/[0.03]">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center font-mono text-xs text-white/30">
            siddcn — bash — 80x24
          </div>
        </div>

        {/* Terminal Content Area */}
        <div className="h-[450px] p-6 font-mono text-sm relative">
          <AnimatePresence mode="wait">
            {/* View 1: Boot Sequence */}
            {view === "boot" && (
              <motion.div
                key="boot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2"
              >
                {bootLines.map((line, i) => (
                  <div
                    key={i}
                    className={`${i === 0 ? "text-emerald-400" : "text-slate-300"}`}
                  >
                    {line}
                  </div>
                ))}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle"
                />
              </motion.div>
            )}

            {/* View 2: Component Grid */}
            {view === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col"
              >
                {/* Header Title */}
                <div className="flex justify-center mb-6">
                  <div className="border-y-2 border-x-2 border-cyan-500/50 px-6 py-1 text-cyan-400 font-bold tracking-wider relative">
                    <div className="absolute top-0 left-0 -mt-1 -ml-1 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
                    <div className="absolute bottom-0 right-0 -mb-1 -mr-1 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>
                    siddcn Component Library Showcase
                  </div>
                </div>

                <div className="text-center text-slate-500 text-xs mb-6">
                  Navigate the grid with arrow keys · Enter to explore
                </div>

                {/* THE GRID */}
                <div className="grid grid-cols-3 gap-3">
                  {GRID_ITEMS.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={item.id}
                        className={`
                          relative p-3 border transition-all duration-300
                          ${
                            isActive
                              ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_-5px_rgba(34,211,238,0.3)]"
                              : "border-white/10 text-slate-500"
                          }
                        `}
                      >
                        {/* Corner markers for active item */}
                        {isActive && (
                          <>
                            <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400" />
                            <div className="absolute top-0 right-0 w-1 h-1 bg-cyan-400" />
                            <div className="absolute bottom-0 left-0 w-1 h-1 bg-cyan-400" />
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400" />
                          </>
                        )}

                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={
                              isActive ? "text-cyan-400" : "text-slate-600"
                            }
                          >
                            {item.icon}
                          </span>
                          <span
                            className={`font-bold ${isActive ? "text-white" : "text-slate-500"}`}
                          >
                            {item.label}
                          </span>
                        </div>

                        <div className="text-xs truncate pl-5">
                          {isActive ? (
                            <span className="text-cyan-300/70">
                              [ {item.label} ]
                            </span>
                          ) : (
                            <span className="opacity-50">{item.desc}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Status Line */}
                <div className="mt-auto border-t border-white/10 pt-3 flex justify-between text-xs font-mono text-slate-500">
                  <span>{GRID_ITEMS.length} components</span>
                  <span className="text-emerald-500 animate-pulse">
                    ● Connected
                  </span>
                  <span>Ctrl+C quit</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
