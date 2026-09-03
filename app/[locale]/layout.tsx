import Link from "@/app/components/LocaleLink";
import { GTProvider, useMessages } from "gt-next";
import { LocaleSelector } from "gt-next/client";
import { demoPages } from "./demo/demoPages";
import ThemeToggle from "../components/ThemeToggle";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const m = useMessages();

  return (
    <GTProvider>
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              GT Demo
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {demoPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  {m(page.label)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LocaleSelector className="rounded-md border border-zinc-300 bg-white px-2 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800" />
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </GTProvider>
  );
}
