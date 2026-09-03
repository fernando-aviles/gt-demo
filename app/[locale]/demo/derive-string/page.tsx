import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import DeriveString from "./_examples/DeriveString";

const DIR = "app/[locale]/demo/derive-string/_examples";

export default async function DeriveStringDemo() {
  const steps = await withSource([
    {
      title: msg("Derived Strings"),
      tag: "derive()",
      description: msg(
        "Interpolate a derive() call into a template literal passed to gt(). Every possible return value is pre-translated, so switching is instant."
      ),
      file: `${DIR}/DeriveString.tsx`,
      node: <DeriveString />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            derive() Strings
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            The string counterpart to the Derive component. Mark the varying
            part of a string so GT can pre-generate a translation for each
            variant.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
