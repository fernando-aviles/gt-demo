import { T, Var, Num, Currency, DateTime } from "gt-next";

export default function OrderSummary() {
  const userName = "Alex";
  const itemCount = 11423;
  const price = 29.99;
  const orderDate = new Date("2025-03-15T10:30:00");

  return (
    <T>
      <p className="text-zinc-700 dark:text-zinc-300">
        Hi <Var>{userName}</Var>, your order of <Num>{itemCount}</Num> items
        totaling <Currency currency="USD">{price}</Currency> was placed on{" "}
        <DateTime options={{ dateStyle: "medium" }}>{orderDate}</DateTime>.
      </p>
    </T>
  );
}
