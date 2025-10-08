import path from "path";

export const i18nConfig = {
  i18n: {
    defaultLocale: "ua",
    locales: ["en", "ua", "ru"],
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/public/locales",
};
export default i18nConfig;
