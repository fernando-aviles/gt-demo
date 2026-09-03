"use client";

import { useGT } from "gt-next/client";

export default function PageTitle() {
  const gt = useGT();

  const pageTitle = gt("Dashboard — {count} new updates", { count: 5 });

  return (
    <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="rounded bg-zinc-200 px-2 py-0.5 font-mono text-xs dark:bg-zinc-700">
          document.title
        </span>
        <span className="text-zinc-700 dark:text-zinc-300">{pageTitle}</span>
      </div>
    </div>
  );
}
