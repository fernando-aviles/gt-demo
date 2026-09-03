"use client";

import { useState } from "react";
import { T, Num, Plural } from "gt-next";

export default function PluralExample() {
  const [count, setCount] = useState(3);

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          <T>Count:</T>
        </label>
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          -
        </button>
        <span className="w-8 text-center text-lg font-semibold text-zinc-900 dark:text-white">
          <Num>{count}</Num>
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          +
        </button>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="text-zinc-700 dark:text-zinc-300">
            <T>
              <Plural
                n={count}
                zero={<>You have no new notifications.</>}
                one={
                  <>
                    You have <Num>{count}</Num> new notification.
                  </>
                }
              >
                You have <Num>{count}</Num> new notifications.
              </Plural>
            </T>
          </p>
        </div>

        <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="text-zinc-700 dark:text-zinc-300">
            <T>
              <Plural
                n={count}
                zero={<>You have no items in your cart.</>}
                one={
                  <>
                    <Num>{count}</Num> item in your cart.
                  </>
                }
              >
                <Num>{count}</Num> items in your cart.
              </Plural>
            </T>
          </p>
        </div>
      </div>
    </div>
  );
}
