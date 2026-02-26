import Link from "next/link";
import { GTProvider, useMessages } from "gt-next";
import { LocaleSelector } from "gt-next/client";
import { demoPages } from "./demo/demoPages";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const m = useMessages();

  return (
    <GTProvider>
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white"
            >
              GT Demo
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {demoPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  {m(page.label)}
                </Link>
              ))}
            </div>
          </div>
          <LocaleSelector />
        </div>
      </nav>
      <main>{children}</main>
    </GTProvider>
  );
}
