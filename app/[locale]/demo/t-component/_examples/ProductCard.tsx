import { T } from "gt-next";

export default function ProductCard() {
  return (
    <T>
      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Pro Plan
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Everything you need to scale your internationalization.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Unlimited translations</li>
          <li>Priority support</li>
          <li>Advanced analytics</li>
          <li>Custom workflows</li>
        </ul>
        <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          Get started
        </button>
      </div>
    </T>
  );
}
