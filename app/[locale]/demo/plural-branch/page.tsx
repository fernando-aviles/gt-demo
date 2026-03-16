"use client";

import { useState } from "react";
import { T, Num, Plural, Branch, useGT } from "gt-next";

export default function PluralBranchDemo() {
  const gt = useGT();
  const [count, setCount] = useState(3);
  const [status, setStatus] = useState<"active" | "inactive" | "pending">(
    "active"
  );

  return (
    <div className="space-y-10">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Plural & Branch
          </h1>
          <p className="text-zinc-400">
            Handle pluralization rules and conditional content that adapts to
            the target language. Use the controls below to see translations
            change in real time.
          </p>
        </header>
      </T>

      {/* Plural */}
      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<Plural> — Pluralization"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Automatically applies the correct plural form based on CLDR rules
            for the target language.
          </p>

          <div className="mb-4 flex items-center gap-3">
            <label className="text-sm text-zinc-400">Count:</label>
            <button
              onClick={() => setCount(Math.max(0, count - 1))}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
            >
              -
            </button>
            <span className="w-8 text-center text-lg font-semibold text-white">
              <Num>{count}</Num>
            </span>
            <button
              onClick={() => setCount(count + 1)}
              className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
            >
              +
            </button>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
              <p className="text-zinc-300">
                <Plural
                  n={count}
                  zero={
                    <>
                      You have no new notifications.
                    </>
                  }
                  one={
                    <>
                      You have <Num>{count}</Num> new notification.
                    </>
                  }
                >
                  You have <Num>{count}</Num> new notifications.
                </Plural>
              </p>
            </div>

            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
              <p className="text-zinc-300">
                <Plural
                  n={count}
                  zero={
                    <>
                      You have no items in your cart.
                    </>
                  }
                  one={
                    <>
                      <Num>{count}</Num> item in your cart.
                    </>
                  }
                >
                  <Num>{count}</Num> items in your cart.
                </Plural>
              </p>
            </div>
          </div>
        </section>
      </T>

      {/* Branch */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <T>
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<Branch> — Conditional Content"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Render different translations based on a value — like status,
            gender, or role. The entire block is sent for translation.
          </p>
        </T>

        <div className="mb-4 flex items-center gap-2">
          <label className="text-sm text-zinc-400">{gt("Status:")}</label>
          {(["active", "inactive", "pending"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-md px-3 py-1 text-sm capitalize transition-colors ${
                status === s
                  ? "bg-blue-600 text-white"
                  : "border border-zinc-700 bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              <Branch
                branch={status}
                active={
                  <>
                    Your account is{" "}
                    <strong className="text-green-400">active</strong>. All
                    features are available.
                  </>
                }
                inactive={
                  <>
                    Your account is{" "}
                    <strong className="text-red-400">inactive</strong>. Please
                    renew your subscription.
                  </>
                }
                pending={
                  <>
                    Your account is{" "}
                    <strong className="text-yellow-400">
                      pending review
                    </strong>
                    . We'll notify you once approved.
                  </>
                }
              />
            </T>
          </p>
        </div>
      </section>
    </div>
  );
}
