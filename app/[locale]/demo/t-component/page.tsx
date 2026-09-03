import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import BasicText from "./_examples/BasicText";
import NestedElements from "./_examples/NestedElements";
import ProductCard from "./_examples/ProductCard";

const DIR = "app/[locale]/demo/t-component/_examples";

export default async function TComponentDemo() {
  const steps = await withSource([
    {
      title: msg("Basic Text"),
      description: msg(
        "Wrap a block of JSX in the T component and every string inside it becomes translatable."
      ),
      file: `${DIR}/BasicText.tsx`,
      node: <BasicText />,
    },
    {
      title: msg("Nested Elements"),
      description: msg(
        "Inline markup like bold, italics, and links is preserved — the whole block is translated as one unit."
      ),
      file: `${DIR}/NestedElements.tsx`,
      node: <NestedElements />,
    },
    {
      title: msg("Product Card"),
      description: msg(
        "A realistic UI block: headings, body copy, a list, and a button all translated together."
      ),
      file: `${DIR}/ProductCard.tsx`,
      node: <ProductCard />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            The T Component
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Wrap any JSX content in the T component to make it translatable.
            This is the most fundamental building block of gt-next.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
