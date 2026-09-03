import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import StringVariables from "./_examples/StringVariables";
import Numbers from "./_examples/Numbers";
import Currencies from "./_examples/Currencies";
import Dates from "./_examples/Dates";
import OrderSummary from "./_examples/OrderSummary";
import PluralizationTeaser from "./_examples/PluralizationTeaser";

const DIR = "app/[locale]/demo/variables/_examples";

export default async function VariablesDemo() {
  const steps = await withSource([
    {
      title: msg("String Variables"),
      tag: "<Var>",
      description: msg(
        "Interpolate a dynamic string value that stays as-is (not translated)."
      ),
      file: `${DIR}/StringVariables.tsx`,
      node: <StringVariables />,
    },
    {
      title: msg("Numbers"),
      tag: "<Num>",
      description: msg(
        "Format numbers according to the user's locale (11,423 in English, 11.423 in German)."
      ),
      file: `${DIR}/Numbers.tsx`,
      node: <Numbers />,
    },
    {
      title: msg("Prices"),
      tag: "<Currency>",
      description: msg(
        "Display prices formatted for the target locale and currency."
      ),
      file: `${DIR}/Currencies.tsx`,
      node: <Currencies />,
    },
    {
      title: msg("Dates & Times"),
      tag: "<DateTime>",
      description: msg(
        "Render dates and times in the locale-appropriate format."
      ),
      file: `${DIR}/Dates.tsx`,
      node: <Dates />,
    },
    {
      title: msg("All Together — Order Summary"),
      description: msg(
        "Every variable component composed into a single translated sentence."
      ),
      file: `${DIR}/OrderSummary.tsx`,
      node: <OrderSummary />,
    },
    {
      title: msg("But what about pluralization?"),
      description: msg(
        "Variables format values, but they cannot change the sentence around them. That is what Plural is for."
      ),
      file: `${DIR}/PluralizationTeaser.tsx`,
      node: <PluralizationTeaser />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            Variables
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Use variable components to interpolate dynamic values inside
            translated content. Values are automatically formatted for the
            target locale.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
