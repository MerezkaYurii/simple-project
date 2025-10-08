"use client";

import { useRouter } from "next/router";
import { Locale } from "../types/locale";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = (router.locale as Locale) || "en";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: Locale) => {
    setIsOpen(false);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-0 py-0  hover:bg-gray-300 transition-colors"
      >
        <svg className="w-9 h-9 fill-current text-white">
          <use href="/sprite.svg#icon-changeLanguage" />
        </svg>
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
          {[
            { code: "en", label: "En English" },
            { code: "ua", label: "🇺a Українська" },
            // { code: "ru", label: "🇷u Русский" },
          ].map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code as Locale)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLocale === lang.code ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
