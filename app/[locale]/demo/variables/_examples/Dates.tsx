import { T, DateTime } from "gt-next";

export default function Dates() {
  const orderDate = new Date("2025-03-15T10:30:00");

  return (
    <T>
      <p className="text-zinc-700 dark:text-zinc-300">
        Order placed on{" "}
        <DateTime options={{ dateStyle: "long", timeStyle: "short" }}>
          {orderDate}
        </DateTime>
        .
      </p>
    </T>
  );
}
