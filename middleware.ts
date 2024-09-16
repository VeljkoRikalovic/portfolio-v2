import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "rs"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
