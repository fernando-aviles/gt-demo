import { T, msg } from "gt-next";
import DemoStepper from "../_components/DemoStepper";
import { withSource } from "../_lib/source";
import BasicString from "./_examples/BasicString";
import PageTitle from "./_examples/PageTitle";
import Attributes from "./_examples/Attributes";
import ToastMessage from "./_examples/ToastMessage";

const DIR = "app/[locale]/demo/strings/_examples";

export default async function StringsDemo() {
  const steps = await withSource([
    {
      title: msg("Basic String Translation"),
      tag: "useGT()",
      description: msg(
        "Pass a string with ICU-style placeholders and the values to fill them with."
      ),
      file: `${DIR}/BasicString.tsx`,
      node: <BasicString />,
    },
    {
      title: msg("Page Titles & Metadata"),
      description: msg(
        "Translate strings used as document titles or other metadata."
      ),
      file: `${DIR}/PageTitle.tsx`,
      node: <PageTitle />,
    },
    {
      title: msg("HTML Attributes"),
      description: msg(
        "Use translated strings for placeholders, aria-labels, and titles — anywhere JSX cannot go."
      ),
      file: `${DIR}/Attributes.tsx`,
      node: <Attributes />,
    },
    {
      title: msg("Dynamic Messages"),
      description: msg(
        "Translate toast messages, alerts, and other strings created at runtime."
      ),
      file: `${DIR}/ToastMessage.tsx`,
      node: <ToastMessage />,
    },
  ]);

  return (
    <div className="space-y-8">
      <T>
        <header>
          <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
            String Translations
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Use the useGT() hook to translate plain strings — perfect for
            attributes, titles, placeholders, and any context where JSX wrapping
            isn't possible.
          </p>
        </header>
      </T>

      <DemoStepper steps={steps} />
    </div>
  );
}
