import { T, Num } from "gt-next";

export default function Numbers() {
  const itemCount = 11423;

  return (
    <T>
      <p className="text-zinc-700 dark:text-zinc-300">
        You have <Num>{itemCount}</Num> items in your inventory.
      </p>
    </T>
  );
}
