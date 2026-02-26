"use client";

import { useState } from "react";
import { T, Var, Num, Currency, DateTime } from "gt-next";

export default function VariablesDemo() {
  const userName = "Alex";
  const itemCount = 11423;
  const price = 29.99;
  const orderDate = new Date("2025-03-15T10:30:00");
  const [teaserCount, setTeaserCount] = useState(1);

  return (
    <div className="space-y-10">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">Variables</h1>
          <p className="text-zinc-400">
            Use variable components to interpolate dynamic values inside
            translated content. Values are automatically formatted for the
            target locale.
          </p>
        </header>
      </T>

      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<Var> — String Variables"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Interpolate a dynamic string value that stays as-is (not
            translated).
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <p className="text-zinc-300">
              Hello, <Var>{userName}</Var>! Welcome back to your dashboard.
            </p>
          </div>
        </section>
      </T>

      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<Num> — Numbers"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Format numbers according to the user's locale (e.g. 11,423 vs
            11.423).
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <p className="text-zinc-300">
              You have <Num>{itemCount}</Num> items in your inventory.
            </p>
          </div>
        </section>
      </T>

      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<Currency> — Prices"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Display prices formatted for the target locale and currency.
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <p className="text-zinc-300">
              Your total is <Currency currency="USD">{price}</Currency>.
            </p>
            <p className="mt-2 text-zinc-300">
              Equivalent: <Currency currency="EUR">{price * 0.92}</Currency>.
            </p>
          </div>
        </section>
      </T>

      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-1 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {"<DateTime> — Dates & Times"}
          </h2>
          <p className="mb-4 text-xs text-zinc-500">
            Render dates and times in the locale-appropriate format.
          </p>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <p className="text-zinc-300">
              Order placed on{" "}
              <DateTime options={{ dateStyle: "long", timeStyle: "short" }}>
                {orderDate}
              </DateTime>
              .
            </p>
          </div>
        </section>
      </T>

      <T>
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            All Together — Order Summary
          </h2>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5 space-y-2">
            <p className="text-zinc-300">
              Hi <Var>{userName}</Var>, your order of <Num>{itemCount}</Num>{" "}
              items totaling <Currency currency="USD">{price}</Currency> was
              placed on{" "}
              <DateTime options={{ dateStyle: "medium" }}>
                {orderDate}
              </DateTime>
              .
            </p>
          </div>
        </section>
      </T>

      {/* Limitation teaser */}
      <section className="rounded-xl border border-yellow-600/30 bg-yellow-500/5 p-6">
        <T>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-yellow-500">
            But what about pluralization?
          </h2>
          <p className="mb-4 text-xs text-zinc-400">
            {"<Num>"} formats numbers beautifully, but the surrounding text
            stays the same regardless of the value. Try changing the count:
          </p>
        </T>

        <div className="mb-4 flex items-center gap-3">
          <button
            onClick={() => setTeaserCount(Math.max(0, teaserCount - 1))}
            className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
          >
            -
          </button>
          <span className="w-8 text-center text-lg font-semibold text-white">
            {teaserCount}
          </span>
          <button
            onClick={() => setTeaserCount(teaserCount + 1)}
            className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white hover:bg-zinc-700"
          >
            +
          </button>
        </div>

        <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-zinc-300">
            <T>
              You have <Num>{teaserCount}</Num> items in your cart.
            </T>
          </p>
        </div>
      </section>
    </div>
  );
}
