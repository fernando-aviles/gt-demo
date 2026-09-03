import { T } from "gt-next";

export default function BasicText() {
  return (
    <T>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Welcome to our platform
        </h3>
        <p className="text-zinc-700 dark:text-zinc-300">
          We help teams build products that work for everyone, regardless of the
          language they speak. Our tools make internationalization simple.
        </p>
      </div>
    </T>
  );
}
