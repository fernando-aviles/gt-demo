import { T, Var } from "gt-next";

export default function StringVariables() {
  const userName = "Alex";

  return (
    <T>
      <p className="text-zinc-700 dark:text-zinc-300">
        Hello, <Var>{userName}</Var>! Welcome back to your dashboard.
      </p>
    </T>
  );
}
