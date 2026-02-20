"use client";

import Link from "next/link";

interface ComponentVariant {
  id: string;
  name: string;
  description: string;
  preview: string;
}

interface ComponentCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  variants: ComponentVariant[];
}

export function ComponentCard({
  id,
  name,
  icon,
  description,
  variants,
}: ComponentCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-white/20 bg-zinc-50 dark:bg-black/50 p-6 transition-all hover:border-zinc-300 dark:hover:border-white/50">
      <div className="mb-4 flex items-start justify-between">
        <div className="text-4xl">{icon}</div>
        <span className="rounded bg-emerald-100 dark:bg-emerald-500/20 px-2 py-1 text-xs text-emerald-700 dark:text-emerald-400">
          {variants.length} variant{variants.length !== 1 ? "s" : ""}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">{name}</h3>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

      <div className="space-y-2">
        {variants.map((variant) => (
          <Link
            key={variant.id}
            href={`/components/${id}/${variant.id}`}
            className="block rounded border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/80 p-3 transition-all hover:border-zinc-300 dark:hover:border-white/30"
          >
            <div className="mb-1 font-medium text-zinc-900 dark:text-white">
              {variant.name}
            </div>
            <div className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
              {variant.description}
            </div>
            <div className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
              {variant.preview}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
