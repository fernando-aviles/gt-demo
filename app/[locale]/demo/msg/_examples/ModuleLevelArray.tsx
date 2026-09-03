"use client";

import { msg, useMessages } from "gt-next/client";

// ---- Strings defined at module level, outside any component ----

const notifications = [
  { text: msg("Your profile has been updated."), type: "blue" as const },
  { text: msg("Payment received — thank you!"), type: "green" as const },
  { text: msg("Your trial expires in 3 days."), type: "yellow" as const },
  { text: msg("Unable to connect to the server."), type: "red" as const },
];

const colorMap = {
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  green:
    "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
  yellow:
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  red: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function ModuleLevelArray() {
  const m = useMessages();

  return (
    <div className="space-y-2">
      {notifications.map((n) => (
        <div
          key={n.text}
          className={`rounded-md border px-4 py-3 text-sm ${colorMap[n.type]}`}
        >
          {m(n.text)}
        </div>
      ))}
    </div>
  );
}
