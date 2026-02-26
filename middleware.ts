import { createNextMiddleware } from "gt-next/middleware";

export default createNextMiddleware({
  localeRouting: true,
  prefixDefaultLocale: false,
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
