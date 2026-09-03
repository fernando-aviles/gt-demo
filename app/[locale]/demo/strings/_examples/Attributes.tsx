"use client";

import { T } from "gt-next";
import { useGT } from "gt-next/client";

export default function Attributes() {
  const gt = useGT();

  const placeholder = gt("Search your projects...");
  const ariaLabel = gt("Close the settings panel");

  return (
    <div className="space-y-4 rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
      <div>
        <label className="mb-1 block text-xs text-zinc-500">placeholder</label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-900 dark:text-white"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-zinc-500">aria-label</label>
        <button
          aria-label={ariaLabel}
          className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          ✕ <span className="text-xs text-zinc-500">{ariaLabel}</span>
        </button>
      </div>
      <T>
        <p className="text-xs text-zinc-500">
          Inspect the input and the button to see the translated attributes.
        </p>
      </T>
    </div>
  );
}
