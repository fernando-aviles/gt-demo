"use client";

import { useState } from "react";
import { Derive, T } from "gt-next";

function getSubject(isMale: boolean) {
  if (isMale) return "boy";
  return "girl";
}

function getTrait(isTall: boolean) {
  if (isTall) return "tall";
  return "smart";
}

export default function GenderedTranslations() {
  const [isMale, setIsMale] = useState(true);
  const [isTall, setIsTall] = useState(true);

  const buttonClass = (active: boolean) =>
    `rounded-md px-3 py-1 text-sm transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "border border-zinc-300 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
    }`;

  return (
    <div>
      <T>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMale(true)}
              className={buttonClass(isMale)}
            >
              Male
            </button>
            <button
              onClick={() => setIsMale(false)}
              className={buttonClass(!isMale)}
            >
              Female
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTall(true)}
              className={buttonClass(isTall)}
            >
              Tall
            </button>
            <button
              onClick={() => setIsTall(false)}
              className={buttonClass(!isTall)}
            >
              Smart
            </button>
          </div>
        </div>
      </T>

      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300">
          <T>
            The <Derive>{getSubject(isMale)}</Derive> is very{" "}
            <Derive>{getTrait(isTall)}</Derive>.
          </T>
        </p>
      </div>
    </div>
  );
}
