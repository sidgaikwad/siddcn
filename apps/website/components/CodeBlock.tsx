"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-lg border border-zinc-200 dark:border-white/20 bg-zinc-50 dark:bg-black/80">
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/20 px-4 py-2">
          <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
            {filename}
          </span>
          <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            {language}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm text-emerald-600 dark:text-emerald-400">{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 rounded border border-zinc-200 dark:border-white/20 bg-white dark:bg-black px-2 py-1 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-zinc-100 dark:hover:bg-white/10"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
