import { T } from "gt-next";

export default function TComponentDemo() {
  return (
    <T>
      <div className="space-y-10">
        <header>
          <h1 className="mb-2 text-3xl font-bold text-white">
            {"The T Component"}
          </h1>
          <p className="text-zinc-400">
            Wrap any JSX content in the T component to make it translatable.
            This is the most fundamental building block of gt-next.
          </p>
        </header>

        {/* Example: Basic text */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Basic Text
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Welcome to our platform
            </h3>
            <p className="text-zinc-300">
              We help teams build products that work for everyone, regardless of
              the language they speak. Our tools make internationalization
              simple.
            </p>
          </div>
        </section>

        {/* Example: Nested elements */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Nested Elements
          </h2>
          <div className="space-y-3">
            <p className="text-zinc-300">
              The T component handles <strong>bold text</strong>,{" "}
              <em>italic text</em>, and even{" "}
              <a href="#" className="text-blue-400 underline">
                links
              </a>{" "}
              seamlessly. The entire block is translated as one unit, preserving
              structure.
            </p>
          </div>
        </section>

        {/* Example: Product card */}
        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Product Card Example
          </h2>
          <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-5">
            <h3 className="text-lg font-semibold text-white">Pro Plan</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Everything you need to scale your internationalization.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>Unlimited translations</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>Custom workflows</li>
            </ul>
            <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
              Get started
            </button>
          </div>
        </section>
      </div>
    </T>
  );
}
