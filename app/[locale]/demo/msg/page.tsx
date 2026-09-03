import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import SharedStrings from "./_examples/SharedStrings";
import ModuleLevelArray from "./_examples/ModuleLevelArray";

const DIR = "app/[locale]/demo/msg/_examples";

export default async function MsgDemo() {
  const steps = await withSource([
    {
      title: msg("Shared Strings Across Components"),
      tag: "msg()",
      description: msg(
        "Define a string once with msg() in a shared file, then decode it with useMessages() anywhere it is rendered."
      ),
      file: `${DIR}/SharedStrings.tsx`,
      node: <SharedStrings />,
    },
    {
      title: msg("Module-Level Arrays"),
      tag: "useMessages()",
      description: msg(
        "Encode an array of strings with msg() outside the component, then decode them with useMessages() at render time."
      ),
      file: `${DIR}/ModuleLevelArray.tsx`,
      node: <ModuleLevelArray />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            msg() & useMessages()
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Use msg() to encode translatable strings at definition time and
            useMessages() to resolve them at render time. Define strings once,
            use them across any number of components.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
