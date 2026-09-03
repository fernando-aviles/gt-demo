import { T, Currency } from "gt-next";

export default function Currencies() {
  const price = 29.99;

  return (
    <T>
      <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
        <p>
          Your total is <Currency currency="USD">{price}</Currency>.
        </p>
        <p>
          Equivalent: <Currency currency="EUR">{price * 0.92}</Currency>.
        </p>
      </div>
    </T>
  );
}
