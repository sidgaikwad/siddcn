"use client";

import { useState } from "react";
import Link from "next/link";

const themes = [
  {
    id: "default",
    name: "Default",
    description: "Cyan & Green - The classic siddcn look",
    colors: {
      primary: "#7dcfff",
      secondary: "#7aa2f7",
      success: "#9ece6a",
      border: "#7dcfff",
    },
    borderStyle: "round",
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Deep blue theme inspired by the sea",
    colors: {
      primary: "#7aa2f7",
      secondary: "#7dcfff",
      success: "#89b4fa",
      border: "#7aa2f7",
    },
    borderStyle: "double",
  },
  {
    id: "forest",
    name: "Forest",
    description: "Natural green theme for the nature lovers",
    colors: {
      primary: "#9ece6a",
      secondary: "#98c379",
      success: "#9ece6a",
      border: "#9ece6a",
    },
    borderStyle: "round",
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Warm orange & pink theme",
    colors: {
      primary: "#f7768e",
      secondary: "#e0af68",
      success: "#e0af68",
      border: "#f7768e",
    },
    borderStyle: "round",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean white & gray theme",
    colors: {
      primary: "#ffffff",
      secondary: "#888888",
      success: "#ffffff",
      border: "#ffffff",
    },
    borderStyle: "single",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Neon pink & cyan futuristic theme",
    colors: {
      primary: "#ff79c6",
      secondary: "#8be9fd",
      success: "#50fa7b",
      border: "#ff79c6",
    },
    borderStyle: "bold",
  },
];

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            Theme Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-900 dark:text-zinc-300/70">
            Siddcn comes with 6 beautiful built-in themes. Click on any theme to
            preview it, or create your own custom theme.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Theme Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {themes.map((theme, idx) => {
              const isActive = selectedTheme.id === theme.id;

              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className="group relative block text-left outline-none"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Hover Gradient Glow Effect */}
                  <div
                    className={`absolute -inset-0.5 rounded-xl blur transition-opacity duration-300 ${
                      isActive
                        ? "opacity-75"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background: `linear-gradient(to right, ${theme.colors.primary}33, ${theme.colors.secondary}33)`,
                    }}
                  />

                  {/* Card Content */}
                  <div
                    className={`relative h-full rounded-lg border p-4 transition-all ${
                      isActive
                        ? "border-emerald-400 dark:border-emerald-500/30/50 bg-zinc-50 dark:bg-[#0c0c0c]"
                        : "border-emerald-400 dark:border-emerald-500/30/20 bg-zinc-50 dark:bg-[#0c0c0c]/50 group-hover:border-emerald-400 dark:border-emerald-500/30/40"
                    }`}
                  >
                    <div
                      className="mb-3 h-2 rounded-full transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: theme.colors.primary }}
                    />

                    <h3
                      className={`font-semibold transition-colors ${
                        isActive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-zinc-900 dark:text-zinc-300 group-hover:text-zinc-900 dark:text-white"
                      }`}
                    >
                      {theme.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-900 dark:text-zinc-300/60 group-hover:text-zinc-900 dark:text-zinc-300/80 transition-colors">
                      {theme.description}
                    </p>

                    <div className="mt-3 flex gap-2">
                      {Object.values(theme.colors).map((color, idx) => (
                        <div
                          key={idx}
                          className="h-4 w-4 rounded border border-white/10 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Active Indicator Arrow */}
                    {isActive && (
                      <div className="absolute bottom-3 right-3 text-emerald-600 dark:text-emerald-400 animate-pulse">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Theme Preview - No changes needed here, keeping logic same */}
          <div className="rounded-lg border border-emerald-400 dark:border-emerald-500/30/30 bg-zinc-50 dark:bg-[#0c0c0c]/80 p-6 sticky top-6 h-fit backdrop-blur-sm">
            <h3 className="mb-4 text-xl font-semibold text-emerald-600 dark:text-emerald-400">
              Preview: {selectedTheme.name}
            </h3>

            <div
              className="rounded-lg p-4 font-mono text-sm transition-all duration-300"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: selectedTheme.colors.border,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              {/* Simulated Terminal UI */}
              <div className="mb-4">
                <span style={{ color: selectedTheme.colors.primary }}>
                  siddcn
                </span>
                <span className="text-zinc-900 dark:text-zinc-300/60">
                  {" "}
                  Component Library
                </span>
              </div>

              <div
                className="mb-4 rounded p-2 transition-colors duration-300"
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: selectedTheme.colors.border,
                }}
              >
                <div style={{ color: selectedTheme.colors.primary }}>
                  {">"} Buttons
                </div>
                <div className="text-zinc-900 dark:text-zinc-300/60"> Progress</div>
                <div className="text-zinc-900 dark:text-zinc-300/60"> Badges</div>
              </div>

              <div className="mb-4">
                <span style={{ color: selectedTheme.colors.success }}>
                  [========
                </span>
                <span className="text-zinc-900 dark:text-zinc-300/40">{"  ]"}</span>
                <span className="text-zinc-900 dark:text-zinc-300/60"> 75%</span>
              </div>

              <div className="flex gap-2">
                <span
                  className="rounded px-2"
                  style={{
                    backgroundColor: selectedTheme.colors.success + "33",
                    color: selectedTheme.colors.success,
                  }}
                >
                  Active
                </span>
                <span
                  className="rounded px-2"
                  style={{
                    backgroundColor: selectedTheme.colors.secondary + "33",
                    color: selectedTheme.colors.secondary,
                  }}
                >
                  Pending
                </span>
              </div>
            </div>

            <div className="mt-4 text-sm text-zinc-900 dark:text-zinc-300/60">
              <p>
                <strong>Border Style:</strong> {selectedTheme.borderStyle}
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                href="/docs/themes"
                className="rounded-lg bg-emerald-200 dark:bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-terminal-bg transition-colors hover:bg-emerald-200 dark:bg-emerald-400/20/80"
              >
                Theme Documentation
              </Link>
              <Link
                href="/docs/adding-components"
                className="rounded-lg border border-emerald-400 dark:border-emerald-500/30 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 transition-colors hover:bg-emerald-200 dark:bg-emerald-400/20/10"
              >
                Create Custom Theme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
