import { T } from "gt-next";

export default function NestedElements() {
  return (
    <T>
      <p className="text-zinc-700 dark:text-zinc-300">
        The T component handles <strong>bold text</strong>, <em>italic text</em>,
        and even{" "}
        <a href="#" className="text-blue-600 underline dark:text-blue-400">
          links
        </a>{" "}
        seamlessly. The entire block is translated as one unit, preserving
        structure.
      </p>
    </T>
  );
}
