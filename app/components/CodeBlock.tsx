"use client";

import { useState, type ReactNode } from "react";
import { T } from "gt-next";
import { useGT } from "gt-next/client";

// Order matters: the first group that matches wins.
const TOKEN =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:import|export|default|from|as|function|return|const|let|var|if|else|for|while|new|await|async|type|interface|typeof|class|extends|true|false|null|undefined)\b)|(<\/?[A-Za-z][\w.]*|\/>)|(\b\d+(?:\.\d+)?\b)/g;

const CLASSES = [
  "text-zinc-500 italic", // comments
  "text-emerald-600 dark:text-emerald-400", // strings
  "text-purple-600 dark:text-purple-400", // keywords
  "text-blue-600 dark:text-blue-400", // JSX tags
  "text-amber-600 dark:text-amber-500", // numbers
];

/** Tiny TS/JSX highlighter — enough for demo snippets, no extra dependency. */
function highlight(code: string) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of code.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) out.push(code.slice(last, index));

    const group = match.slice(1).findIndex(Boolean);
    out.push(
      <span key={key++} className={CLASSES[group]}>
        {match[0]}
      </span>
    );
    last = index + match[0].length;
  }

  if (last < code.length) out.push(code.slice(last));
  return out;
}

export default function CodeBlock({
  file,
  code,
}: {
  /** Repo-relative path, shown in the header so the file is easy to find. */
  file: string;
  code: string;
}) {
  const gt = useGT();
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(true);

  const copy = async () => {
    await navigator.clipboard.writeText(`// ${file}\n\n${code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-3 border-b border-zinc-200 bg-white px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={gt("Toggle the code snippet")}
          className="shrink-0 text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          <svg
            viewBox="0 0 12 12"
            className={`h-3 w-3 transition-transform ${open ? "" : "-rotate-90"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 4.25 6 7.75l3.5-3.5" />
          </svg>
        </button>
        <span className="min-w-0 flex-1 truncate font-mono text-xs text-zinc-500">
          {file}
        </span>
        <button
          onClick={copy}
          className="shrink-0 rounded-md border border-zinc-300 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          {copied ? <T>Copied</T> : <T>Copy</T>}
        </button>
      </div>
      {open && (
        <pre className="max-h-96 overflow-auto p-4 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
          <code>{highlight(code)}</code>
        </pre>
      )}
    </div>
  );
}
