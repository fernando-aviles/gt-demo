"use client";

import { useState } from "react";
import { T, Var } from "gt-next";
import { useGT } from "gt-next/client";

export default function StringsDemo() {
  const gt = useGT();
  const [name, setName] = useState("Alex");
  const [teaserPerson, setTeaserPerson] = useState<"boy" | "girl">("boy");

  const greeting = gt("Hello, {name}! Welcome back.", { name });
  const pageTitle = gt("Dashboard — {count} new updates", { count: 5 });
  const placeholder = gt("Search your projects...");
  const ariaLabel = gt("Close the settings panel");
  const toastMessage = gt("{name} just joined your team.", { name: "Jordan" });

  return (
    <T>
      <div className="space-y-10">
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            String Translations
          </h1>
          <p className="text-zinc-400">
            Use the useGT() hook to translate plain strings — perfect for
            attributes, titles, placeholders, and any context where JSX
            wrapping isn't possible.
          </p>
        </header>

        {/* Basic string */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Basic String Translation
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Pass a string with ICU-style placeholders and variable values.
          </p>

          <div className="mb-4 flex items-center gap-3">
            <label className="text-sm text-zinc-400">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <p className="text-zinc-300">
              <Var>{greeting}</Var>
            </p>
          </div>
        </section>

        {/* Page title */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Page Titles & Metadata
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Translate strings used as document titles or other metadata.
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="rounded bg-zinc-700 px-2 py-0.5 font-mono text-xs">
                document.title
              </span>
              <span className="text-zinc-300">
                <Var>{pageTitle}</Var>
              </span>
            </div>
          </div>
        </section>

        {/* Attributes */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            HTML Attributes
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Use translated strings for placeholders, aria-labels, and titles.
          </p>
          <div className="space-y-4 rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <div>
              <label className="mb-1 block text-xs text-zinc-500">
                placeholder
              </label>
              <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-zinc-500">
                aria-label
              </label>
              <button
                aria-label={ariaLabel}
                className="rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700"
              >
                ✕{" "}
                <span className="text-xs text-zinc-500">
                  <Var>{ariaLabel}</Var>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Toast / notification */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Dynamic Messages
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Translate toast messages, alerts, and other dynamic strings.
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <div className="flex items-center gap-3 rounded-md border border-blue-500/30 bg-blue-500/10 px-4 py-3">
              <span className="text-blue-400">i</span>
              <p className="text-sm text-zinc-300">
                <Var>{toastMessage}</Var>
              </p>
            </div>
          </div>
        </section>

      </div>
    </T>
  );
}
