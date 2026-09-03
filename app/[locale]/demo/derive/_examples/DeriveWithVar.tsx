"use client";

import { useState } from "react";
import { Derive, T, Var, useGT } from "gt-next";

export default function DeriveWithVar() {
  const gt = useGT();
  const [name, setName] = useState("");

  return (
    <div>
      <T>
        <div className="mb-4 flex items-center gap-3">
          <label className="text-sm text-zinc-600 dark:text-zinc-400">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={gt("Leave empty for fallback")}
            className="w-1/2 rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      </T>

      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300">
          <T>
            Hello <Derive>{name ? <Var>{name}</Var> : "everyone"}</Derive>! I am
            happy you are here!
          </T>
        </p>
      </div>
    </div>
  );
}
