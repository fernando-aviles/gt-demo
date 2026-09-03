import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import PluralExample from "./_examples/PluralExample";
import BranchExample from "./_examples/BranchExample";

const DIR = "app/[locale]/demo/plural-branch/_examples";

export default async function PluralBranchDemo() {
  const steps = await withSource([
    {
      title: msg("Pluralization"),
      tag: "<Plural>",
      description: msg(
        "Automatically applies the correct plural form based on CLDR rules for the target language."
      ),
      file: `${DIR}/PluralExample.tsx`,
      node: <PluralExample />,
    },
    {
      title: msg("Conditional Content"),
      tag: "<Branch>",
      description: msg(
        "Render different translations based on a value — like status, gender, or role. Every branch is sent for translation."
      ),
      file: `${DIR}/BranchExample.tsx`,
      node: <BranchExample />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            Plural & Branch
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Handle pluralization rules and conditional content that adapts to
            the target language. Use the controls below to see translations
            change in real time.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
