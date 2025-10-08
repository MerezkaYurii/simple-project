"use client";

import { useRouter } from "next/router";
import { Locale } from "../types/locale";

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = (router.locale as Locale) || "ua";

  const changeLanguage = (lang: Locale) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div className="flex gap-2">
      {(["en", "ua", "ru"] as Locale[]).map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-2 py-1 rounded ${
            currentLocale === lang ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {lang.toLowerCase()}
        </button>
      ))}
    </div>
  );
}
