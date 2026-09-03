"use client";

import { useState } from "react";
import { Derive, T } from "gt-next";

function getTitle(isKing: boolean) {
  if (isKing) return "king";
  return "queen";
}

export default function RoyalTitle() {
  const [isKing, setIsKing] = useState(true);

  const buttonClass = (active: boolean) =>
    `rounded-md px-3 py-1 text-sm transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "border border-zinc-300 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
    }`;

  return (
    <div>
      <T>
        <div className="mb-4 flex items-center gap-2">
          <button
            onClick={() => setIsKing(true)}
            className={buttonClass(isKing)}
          >
            King
          </button>
          <button
            onClick={() => setIsKing(false)}
            className={buttonClass(!isKing)}
          >
            Queen
          </button>
        </div>
      </T>

      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300">
          <T>
            The <Derive>{getTitle(isKing)}</Derive> was beloved by all.
          </T>
        </p>
      </div>
    </div>
  );
}
