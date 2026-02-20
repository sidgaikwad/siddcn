"use client";

import { useState } from "react";
import Link from "next/link";

const themes = [
  {
    id: "terminal",
    name: "Terminal",
    description: "Classic hacker green on deep black",
    colors: {
      primary: "#22c55e",
      secondary: "#14532d",
      success: "#4ade80",
      border: "#22c55e",
    },
    borderStyle: "dashed",
  },
  {
    id: "default",
    name: "Default",
    description: "Cyan & Green - The classic siddcn look",
    colors: {
      primary: "#0ea5e9",
      secondary: "#3b82f6",
      success: "#84cc16",
      border: "#0ea5e9",
    },
    borderStyle: "solid",
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Deep blue theme inspired by the sea",
    colors: {
      primary: "#3b82f6",
      secondary: "#06b6d4",
      success: "#60a5fa",
      border: "#3b82f6",
    },
    borderStyle: "double",
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Warm orange & pink theme",
    colors: {
      primary: "#f43f5e",
      secondary: "#f59e0b",
      success: "#fbbf24",
      border: "#f43f5e",
    },
    borderStyle: "solid",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean monochrome theme",
    colors: {
      primary: "#52525b",
      secondary: "#a1a1aa",
      success: "#3f3f46",
      border: "#71717a",
    },
    borderStyle: "solid",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Neon pink & cyan futuristic theme",
    colors: {
      primary: "#d946ef",
      secondary: "#06b6d4",
      success: "#a855f7",
      border: "#d946ef",
    },
    borderStyle: "solid",
  },
];

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    // Added font-mono here to apply it to the entire page
    <main className="font-mono min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-[#09090b] dark:text-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          {/* Adjusted sizing and weight to look better with monospace fonts */}
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Theme <span style={{ color: selectedTheme.colors.primary }} className="transition-colors duration-500">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Siddcn comes with 6 beautiful built-in themes. Click on any theme to
            preview it, or create your own custom theme.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 align-top">
          {/* Theme Selection Grid */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 h-max">
            {themes.map((theme, idx) => {
              const isActive = selectedTheme.id === theme.id;

              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className="group relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#09090b] rounded-xl"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Hover Gradient Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 rounded-2xl blur-md transition-all duration-500 ${
                      isActive
                        ? "opacity-100 dark:opacity-75 scale-[1.02]"
                        : "opacity-0 group-hover:opacity-60 dark:group-hover:opacity-50"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary}80, ${theme.colors.secondary}80)`,
                    }}
                  />

                  {/* Card Content */}
                  <div
                    className={`relative h-full rounded-xl border p-5 backdrop-blur-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/90 border-transparent shadow-xl dark:bg-black/90 dark:border-white/10"
                        : "bg-white/50 border-slate-200 hover:bg-white dark:bg-black/40 dark:border-white/5 dark:hover:bg-black/60 dark:hover:border-white/10"
                    }`}
                  >
                    <div
                      className="mb-4 h-1.5 w-12 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ backgroundColor: theme.colors.primary }}
                    />

                    {/* Standardized card header sizes */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {theme.name}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                      {theme.description}
                    </p>

                    <div className="mt-4 flex gap-2.5">
                      {Object.values(theme.colors).map((color, idx) => (
                        <div
                          key={idx}
                          className="h-5 w-5 rounded-full border border-black/5 shadow-inner dark:border-white/10"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Active Indicator Arrow */}
                    {isActive && (
                      <div 
                        className="absolute top-5 right-5 animate-pulse"
                        style={{ color: theme.colors.primary }}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Theme Preview Pane */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-black/60 dark:shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)]">
              {/* Fake Window Header */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100/50 px-4 py-3 dark:border-white/5 dark:bg-white/5">
                <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-sm" />
                <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
                <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  preview ~ {selectedTheme.name.toLowerCase()}
                </span>
              </div>

              <div className="p-6">
                <div
                  className="rounded-xl p-5 text-sm transition-all duration-500 bg-slate-50 dark:bg-[#050505] shadow-inner"
                  style={{
                    borderWidth: "2px",
                    borderStyle: selectedTheme.borderStyle,
                    borderColor: selectedTheme.colors.border,
                  }}
                >
                  {/* Simulated Terminal UI */}
                  <div className="mb-5 flex items-center gap-2">
                    <span 
                      className="font-bold tracking-tight"
                      style={{ color: selectedTheme.colors.primary }}
                    >
                      siddcn
                    </span>
                    <span className="text-slate-400 dark:text-slate-600">v2.0.0</span>
                  </div>

                  <div
                    className="mb-5 rounded-lg p-3 transition-colors duration-500 bg-white dark:bg-[#0a0a0a]"
                    style={{
                      borderWidth: "1px",
                      borderStyle: selectedTheme.borderStyle,
                      borderColor: selectedTheme.colors.border,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ color: selectedTheme.colors.primary }}>{">"}</span>
                      <span className="text-slate-700 dark:text-slate-300">Building components...</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div className="text-slate-500 dark:text-slate-500">✓ Buttons</div>
                      <div className="text-slate-500 dark:text-slate-500">✓ Progress</div>
                      <div className="text-slate-500 dark:text-slate-500">✓ Badges</div>
                    </div>
                  </div>

                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex-1 h-2.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          backgroundColor: selectedTheme.colors.success,
                          width: "75%"
                        }}
                      />
                    </div>
                    <span className="text-slate-500 font-medium">75%</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span
                      className="rounded-md px-3 py-1 font-medium transition-colors"
                      style={{
                        backgroundColor: selectedTheme.colors.success + "20",
                        color: selectedTheme.colors.success,
                        border: `1px solid ${selectedTheme.colors.success}40`
                      }}
                    >
                      Active
                    </span>
                    <span
                      className="rounded-md px-3 py-1 font-medium transition-colors"
                      style={{
                        backgroundColor: selectedTheme.colors.secondary + "20",
                        color: selectedTheme.colors.secondary,
                        border: `1px solid ${selectedTheme.colors.secondary}40`
                      }}
                    >
                      Pending
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/docs/themes"
                    className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ 
                      backgroundColor: selectedTheme.colors.primary,
                      boxShadow: `0 10px 15px -3px ${selectedTheme.colors.primary}40`
                    }}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/docs/adding-components"
                    className="flex-1 rounded-xl border-2 px-4 py-3 text-center text-sm font-bold transition-all hover:bg-slate-50 dark:hover:bg-white/5"
                    style={{ 
                      borderColor: selectedTheme.colors.border,
                      color: selectedTheme.colors.primary
                    }}
                  >
                    Custom Theme
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}