import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import GenderedTranslations from "./_examples/GenderedTranslations";
import RoyalTitle from "./_examples/RoyalTitle";
import DeriveWithVar from "./_examples/DeriveWithVar";

const DIR = "app/[locale]/demo/derive/_examples";

export default async function DeriveDemo() {
  const steps = await withSource([
    {
      title: msg("Gendered Translations"),
      tag: "<Derive>",
      description: msg(
        "In many languages, articles and adjectives change with the gender of the noun. With two Derive values, GT pre-generates every combination — four variants here."
      ),
      file: `${DIR}/GenderedTranslations.tsx`,
      node: <GenderedTranslations />,
    },
    {
      title: msg("Another Example"),
      tag: "<Derive>",
      description: msg(
        "Switch between variants and notice how the surrounding translation changes. Articles, adjectives, and even verb forms may adapt in the target language."
      ),
      file: `${DIR}/RoyalTitle.tsx`,
      node: <RoyalTitle />,
    },
    {
      title: msg("Derive with Var"),
      description: msg(
        "Combine Derive with Var to handle open-ended values alongside fixed fallbacks. Empty name gives the pre-translated 'everyone' variant; a typed name is passed through untranslated."
      ),
      file: `${DIR}/DeriveWithVar.tsx`,
      node: <DeriveWithVar />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            Derive
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Use the Derive component to mark parts of a translation that are
            statically analyzable but can vary at runtime. GT pre-generates
            translations for every possible variant, so switching between them
            is instant with no runtime translation needed.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
