"use client";

import { T } from "gt-next";
import { useMessages } from "gt-next/client";
import { demoPages } from "../../demoPages";

export default function SharedStrings() {
  const m = useMessages();

  return (
    <div>
      <T>
        <p className="mb-4 text-xs text-zinc-500">
          The navigation labels in the header and sidebar are defined once with
          msg() in a shared file and decoded with useMessages() in each
          component. Here are those same strings, resolved in this component
          too:
        </p>
      </T>

      <div className="mb-4 rounded-lg border border-zinc-300 bg-zinc-50 p-5 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-800">
        <p className="mb-2 text-zinc-500">{"// demoPages.ts — defined once"}</p>
        {demoPages.map((page) => (
          <p key={page.href} className="text-zinc-600 dark:text-zinc-400">
            <span className="text-zinc-500">{'{ label: msg("'}</span>
            <span className="text-green-600 dark:text-green-400">
              {m(page.label)}
            </span>
            <span className="text-zinc-500">{'") }'}</span>
          </p>
        ))}
      </div>

      <T>
        <p className="text-xs text-zinc-500">
          Three different components — the header nav, the sidebar, and this
          demo — all import the same array and call useMessages() to get the
          translated labels. The strings are defined once and translated
          everywhere.
        </p>
      </T>
    </div>
  );
}
