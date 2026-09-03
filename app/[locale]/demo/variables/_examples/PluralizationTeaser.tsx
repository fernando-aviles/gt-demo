"use client";

import { useState } from "react";
import { T, Num } from "gt-next";

export default function PluralizationTeaser() {
  const [count, setCount] = useState(1);

  return (
    <div className="rounded-lg border border-yellow-600/30 bg-yellow-500/10 p-5 dark:bg-yellow-500/5">
      <T>
        <p className="mb-4 text-xs text-zinc-600 dark:text-zinc-400">
          Num formats numbers beautifully, but the surrounding text stays the
          same regardless of the value. Try changing the count:
        </p>
      </T>

      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          -
        </button>
        <span className="w-8 text-center text-lg font-semibold text-zinc-900 dark:text-white">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          +
        </button>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300">
        <T>
          You have <Num>{count}</Num> items in your cart.
        </T>
      </p>
    </div>
  );
}
