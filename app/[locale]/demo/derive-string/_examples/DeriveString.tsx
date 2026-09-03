"use client";

import { useState } from "react";
import { T, derive } from "gt-next";
import { useGT } from "gt-next/client";

function getEntity(index: number) {
  if (index === 0) return "John";
  if (index === 1) return "Maria";
  if (index === 2) return "all of you";
  return "everyone";
}

function buttonClass(active: boolean) {
  return `rounded-md px-3 py-1 text-sm transition-colors ${
    active
      ? "bg-blue-600 text-white"
      : "border border-zinc-300 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
  }`;
}

export default function DeriveString() {
  const gt = useGT();
  const [index, setIndex] = useState(0);
  const message = gt(`Hello ${derive(getEntity(index))}! You are beautiful.`);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <p className="text-2xl text-zinc-900 dark:text-white">{message}</p>

      <T>
        <div className="flex gap-2">
          <button
            onClick={() => setIndex(0)}
            className={buttonClass(index === 0)}
          >
            John
          </button>
          <button
            onClick={() => setIndex(1)}
            className={buttonClass(index === 1)}
          >
            Maria
          </button>
          <button
            onClick={() => setIndex(2)}
            className={buttonClass(index === 2)}
          >
            all of you
          </button>
          <button
            onClick={() => setIndex(3)}
            className={buttonClass(index === 3)}
          >
            everyone
          </button>
        </div>
      </T>
    </div>
  );
}
