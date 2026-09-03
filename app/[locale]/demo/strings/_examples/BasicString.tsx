"use client";

import { useState } from "react";
import { T, Var } from "gt-next";
import { useGT } from "gt-next/client";

export default function BasicString() {
  const gt = useGT();
  const [name, setName] = useState("John");

  const greeting = gt("Hello, {name}! Welcome back.", { name });

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          <T>Name:</T>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
        />
      </div>

      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300">{greeting}</p>
      </div>
    </div>
  );
}
