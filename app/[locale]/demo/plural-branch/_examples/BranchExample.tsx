"use client";

import { useState } from "react";
import { T, Branch } from "gt-next";

export default function BranchExample() {
  const [status, setStatus] = useState<"active" | "inactive" | "pending">(
    "active"
  );

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm text-zinc-600 dark:text-zinc-400">
          <T>Status:</T>
        </label>
        {(["active", "inactive", "pending"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`rounded-md px-3 py-1 text-sm capitalize transition-colors ${
              status === s
                ? "bg-blue-600 text-white"
                : "border border-zinc-300 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800">
        <p className="text-zinc-700 dark:text-zinc-300">
          <T>
            <Branch
              branch={status}
              active={
                <>
                  Your account is{" "}
                  <strong className="text-green-600 dark:text-green-400">
                    active
                  </strong>
                  . All features are available.
                </>
              }
              inactive={
                <>
                  Your account is{" "}
                  <strong className="text-red-600 dark:text-red-400">
                    inactive
                  </strong>
                  . Please renew your subscription.
                </>
              }
              pending={
                <>
                  Your account is{" "}
                  <strong className="text-yellow-600 dark:text-yellow-400">
                    pending review
                  </strong>
                  . We'll notify you once approved.
                </>
              }
            />
          </T>
        </p>
      </div>
    </div>
  );
}
