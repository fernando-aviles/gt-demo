import type { ComponentProps } from "react";
import Link from "next/link";
import { useLocale, useDefaultLocale } from "gt-next";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * next/link that keeps the visitor inside their current locale.
 *
 * An unprefixed href like "/demo/msg" makes the middleware answer the
 * navigation with a 307 to "/es/demo/msg". The client router cannot follow a
 * redirect mid-navigation, so the click appears to do nothing. Pointing
 * straight at the localized path avoids the redirect entirely.
 *
 * The default locale is not prefixed, matching prefixDefaultLocale: false in
 * middleware.ts.
 */
export default function LocaleLink({ href, ...props }: Props) {
  const locale = useLocale();
  const defaultLocale = useDefaultLocale();

  const localized =
    href.startsWith("/") && locale !== defaultLocale
      ? `/${locale}${href === "/" ? "" : href}`
      : href;

  return <Link href={localized} {...props} />;
}
