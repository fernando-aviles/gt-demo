import Link from "next/link";
import { T, useMessages } from "gt-next";
import { demoPages } from "./demoPages";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const m = useMessages();

  return (
    <div className="mx-auto flex max-w-6xl gap-8 px-6 py-10">
      <aside className="hidden w-48 shrink-0 md:block">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          <T>Demos</T>
        </h3>
        <nav className="flex flex-col gap-1">
          {demoPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              {m(page.label)}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
