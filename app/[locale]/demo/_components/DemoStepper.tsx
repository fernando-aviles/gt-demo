"use client";

import { useEffect, useState, type ReactNode } from "react";
import { T, Num } from "gt-next";
import { useGT, useMessages } from "gt-next/client";
import CodeBlock from "@/app/components/CodeBlock";

export type Step = {
  title: string;
  /** Literal component/API name, shown verbatim next to the title. */
  tag?: string;
  description: string;
  file: string;
  code: string;
  node: ReactNode;
};

export default function DemoStepper({ steps }: { steps: Step[] }) {
  const gt = useGT();
  const m = useMessages();
  const [index, setIndex] = useState(0);

  const step = steps[index];
  const multiple = steps.length > 1;

  // Left/right arrow keys page through the examples, unless the user is typing
  // into one of the demo inputs.
  useEffect(() => {
    if (!multiple) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(steps.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [multiple, steps.length]);

  const arrowClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg text-zinc-600 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800";

  return (
    <div className="space-y-5">
      {/* Stepper controls */}
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        {multiple && (
          <button
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
            aria-label={gt("Previous example")}
            className={arrowClass}
          >
            ‹
          </button>
        )}

        <div className="min-w-0 flex-1 text-center">
          <p className="flex items-center justify-center gap-2 truncate text-sm font-semibold text-zinc-900 dark:text-white">
            {step.tag && (
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-blue-600 dark:bg-zinc-800 dark:text-blue-400">
                {step.tag}
              </code>
            )}
            {m(step.title)}
          </p>
          {multiple && (
            <p className="mt-0.5 text-xs text-zinc-500">
              <T>
                Example <Num>{index + 1}</Num> of <Num>{steps.length}</Num>
              </T>
            </p>
          )}
        </div>

        {multiple && (
          <button
            onClick={() => setIndex(index + 1)}
            disabled={index === steps.length - 1}
            aria-label={gt("Next example")}
            className={arrowClass}
          >
            ›
          </button>
        )}
      </div>

      {multiple && (
        <div className="flex justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.file}
              onClick={() => setIndex(i)}
              title={m(s.title)}
              aria-label={gt("Go to example {number}", { number: i + 1 })}
              aria-current={i === index}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index
                  ? "bg-blue-600"
                  : "bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      )}

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {m(step.description)}
      </p>

      <CodeBlock file={step.file} code={step.code} />

      {/* Live render of the snippet above */}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <T>Live output</T>
        </h2>
        {step.node}
      </section>
    </div>
  );
}
