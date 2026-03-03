"use client";

import { useState } from "react";
import { T, Static, Var, useGT} from "gt-next";

function getSubject(isMale: boolean) {
  if (isMale) return "boy";
  return "girl";
}

function getTrait(isTall: boolean) {
  if (isTall) return "tall";
  return "smart";
}

function getTitle(isKing: boolean) {
  if (isKing) return "king";
  return "queen";
}

export default function StaticDemo() {
  const gt = useGT();
  const [isMale, setIsMale] = useState(true);
  const [isTall, setIsTall] = useState(true);
  const [isKing, setIsKing] = useState(true);
  const [name, setName] = useState("");

  return (
    <div className="space-y-10">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Static
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
            <button
              onClick={() => setIsMale(true)}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                isMale
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setIsMale(false)}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                !isMale
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Female
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTall(true)}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                isTall
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Tall
            </button>
            <button
              onClick={() => setIsTall(false)}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                !isTall
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Smart
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              The <Static>{getSubject(isMale)}</Static> is very{" "}
              <Static>{getTrait(isTall)}</Static>.
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
          <button
            onClick={() => setIsKing(true)}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              isKing
                ? "bg-blue-600 text-white"
                : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            King
          </button>
          <button
            onClick={() => setIsKing(false)}
            className={`rounded-md px-3 py-1 text-sm transition-colors ${
              !isKing
                ? "bg-blue-600 text-white"
                : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            Queen
          </button>
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              The <Static>{getTitle(isKing)}</Static> was beloved by all.
            </T>
          </p>
        </div>
      </section>

      {/* Static with declareVar */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Static with Var
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Combine Static with Var to handle open-ended values alongside
            fixed fallbacks. When the name is empty, "everyone" is a
            pre-translated Static variant. When populated, Var marks it as an
            untranslated runtime variable.
          </p>
        </T>

        <T>
          <div className="mb-4 flex items-center gap-3">
            <label className="text-sm text-zinc-400">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={gt("Leave empty for fallback")}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 w-1/2 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </T>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              Hello, <Static>{name ? <Var>{name}</Var> : "everyone"}</Static>! You are very smart!
            </T>
          </p>
        </div>
      </section>
    </div>
  );
}
