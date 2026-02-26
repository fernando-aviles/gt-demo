"use client";

import { T, Var } from "gt-next";
import { msg, useMessages } from "gt-next/client";
import { demoPages } from "../demoPages";

// ---- Strings defined at module level, outside any component ----

const notifications = [
  {
    text: msg("Your profile has been updated."),
    type: "blue" as const,
  },
  {
    text: msg("Payment received — thank you!"),
    type: "green" as const,
  },
  {
    text: msg("Your trial expires in 3 days."),
    type: "yellow" as const,
  },
  {
    text: msg("Unable to connect to the server."),
    type: "red" as const,
  },
];

// ---- Component ----

const colorMap = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  green: "border-green-500/30 bg-green-500/10 text-green-400",
  yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
  red: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function MsgDemo() {
  const m = useMessages();

  return (
    <div className="space-y-10">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            {"msg() & useMessages()"}
          </h1>
          <p className="text-zinc-400">
            Use msg() to encode translatable strings at definition time and
            useMessages() to resolve them at render time. Define strings once,
            use them across any number of components.
          </p>
        </header>
      </T>

      {/* Shared strings across components */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Shared Strings Across Components
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            The navigation labels you see in the header and sidebar are defined
            once with msg() in a shared file and decoded with useMessages() in
            each component. Here are those same strings, resolved in this
            component too:
          </p>
        </T>

        <div className="mb-4 rounded-lg border border-zinc-700 bg-zinc-800 p-5 font-mono text-sm">
          <p className="text-zinc-500 mb-2">
            {"// demoPages.ts — defined once"}
          </p>
          {demoPages.map((page) => (
            <p key={page.href} className="text-zinc-400">
              <span className="text-zinc-500">{"{ label: msg(\""}</span>
              <span className="text-green-400">{m(page.label)}</span>
              <span className="text-zinc-500">{"\") }"}</span>
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
      </section>

      {/* Translated notifications */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Module-Level Arrays
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Encode an array of strings with msg() outside the component, then
            decode them with useMessages() at render time.
          </p>
        </T>
        <div className="space-y-2">
          {notifications.map((n) => (
            <div
              key={n.text}
              className={`rounded-md border px-4 py-3 text-sm ${colorMap[n.type]}`}
            >
              {m(n.text)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
