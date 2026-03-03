"use client";

import { useState } from "react";
import { T, Static } from "gt-next";

const people = ["boy", "girl"];
const adjectives = ["tall", "smart"];
const royals = ["king", "queen"];

function getPerson(person: string) {
  if (person === "boy") return "boy";
  return "girl";
}

function getAdjective(adjective: string) {
  if (adjective === "tall") return "tall";
  return "smart";
}

function getRoyal(royal: string) {
  if (royal === "king") return "king";
  return "queen";
}

export default function StaticDemo() {
  const [person, setPerson] = useState("boy");
  const [adjective, setAdjective] = useState("tall");
  const [royal, setRoyal] = useState("king");

  return (
    <div className="space-y-10">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Static Content
          </h1>
          <p className="text-zinc-400">
            Use the Static component to mark parts of a translation that vary at
            runtime. GT pre-generates translations for every possible variant,
            so switching between them is instant — no runtime translation needed.
          </p>
        </header>
      </T>

      {/* Gendered example with 2×2 variants */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Gendered Translations
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            In many languages, articles and adjectives change based on the
            gender of the noun. With two Static values, GT pre-generates every
            combination — here that's 2 × 2 = 4 variants.
          </p>
        </T>

        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            {people.map((p) => (
              <button
                key={p}
                onClick={() => setPerson(p)}
                className={`rounded-md px-3 py-1 text-sm capitalize transition-colors ${
                  person === p
                    ? "bg-blue-600 text-white"
                    : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {adjectives.map((a) => (
              <button
                key={a}
                onClick={() => setAdjective(a)}
                className={`rounded-md px-3 py-1 text-sm capitalize transition-colors ${
                  adjective === a
                    ? "bg-blue-600 text-white"
                    : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              The <Static>{getPerson(person)}</Static> is very{" "}
              <Static>{getAdjective(adjective)}</Static>.
            </T>
          </p>
        </div>
      </section>

      {/* Gendered example 2 */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Another Example
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Switch between variants and notice how the surrounding translation
            changes — articles, adjectives, and even verb forms may adapt in
            the target language.
          </p>
        </T>

        <div className="mb-4 flex items-center gap-2">
          {royals.map((r) => (
            <button
              key={r}
              onClick={() => setRoyal(r)}
              className={`rounded-md px-3 py-1 text-sm capitalize transition-colors ${
                royal === r
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              The <Static>{getRoyal(royal)}</Static> was beloved by all.
            </T>
          </p>
        </div>
      </section>
    </div>
  );
}
