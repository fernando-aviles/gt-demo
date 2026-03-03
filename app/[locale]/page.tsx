import Link from "next/link";
import { T } from "gt-next";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <T>
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
            General Translation Demo
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            A live walkthrough of the gt-next translation library. Each page
            below demonstrates a different feature — edit the code, run
            translations, and watch the UI update in real time.
          </p>
        </div>
      </T>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/demo/t-component"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              T Component
            </h2>
            <p className="text-sm text-zinc-400">
              Wrap any JSX content in the T component to make it translatable.
              The simplest way to internationalize your UI.
            </p>
          </T>
        </Link>

        <Link
          href="/demo/variables"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              Variables
            </h2>
            <p className="text-sm text-zinc-400">
              Use Var, Num, Currency, and DateTime to interpolate dynamic,
              locale-formatted values.
            </p>
          </T>
        </Link>

        <Link
          href="/demo/plural-branch"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              Plural & Branch
            </h2>
            <p className="text-sm text-zinc-400">
              Handle pluralization rules and conditional content with Plural and
              Branch.
            </p>
          </T>
        </Link>

        <Link
          href="/demo/strings"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              String Translations
            </h2>
            <p className="text-sm text-zinc-400">
              Use the useGT() hook for ICU-style string translations — perfect
              for attributes and non-JSX contexts.
            </p>
          </T>
        </Link>

        <Link
          href="/demo/static"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              Static Content
            </h2>
            <p className="text-sm text-zinc-400">
              Mark content that should never be translated with Static — brand
              names, code, technical terms.
            </p>
          </T>
        </Link>

        <Link
          href="/demo/msg"
          className="group rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-800/50"
        >
          <T>
            <h2 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400">
              msg() Messages
            </h2>
            <p className="text-sm text-zinc-400">
              Encode translatable strings with msg() and resolve them with
              useMessages() — ideal for metadata and dynamic strings.
            </p>
          </T>
        </Link>
      </div>
    </div>
  );
}
