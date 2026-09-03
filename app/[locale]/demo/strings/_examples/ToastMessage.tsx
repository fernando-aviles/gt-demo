"use client";

import { useGT } from "gt-next/client";

export default function ToastMessage() {
  const gt = useGT();

  const toastMessage = gt("{name} just joined your team.", { name: "Jordan" });

  return (
    <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="flex items-center gap-3 rounded-md border border-blue-500/30 bg-blue-500/10 px-4 py-3">
        <span className="text-blue-600 dark:text-blue-400">i</span>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {toastMessage}
        </p>
      </div>
    </div>
  );
}
