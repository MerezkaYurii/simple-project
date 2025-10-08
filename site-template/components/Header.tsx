import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import data from "../data/siteData.json";
import { useTranslation } from "next-i18next";

export default function Header() {
  const contacts = data.contacts;
  const { t } = useTranslation("common");
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-500/50 shadow-sm dark:bg-black dark:bg-opacity-80 dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between bg-cyan-700">
        <div className="text-xl font-bold">{t("header.siteTitle")}</div>

        <div className="flex items-center gap-2">
          {contacts.telegram && (
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 bg-[#0088cc] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-telegram-alt-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.linkedin && (
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 bg-[#0A66C2] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-linkedin-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.facebook && (
            <a
              href={contacts.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 bg-[#1877F2] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-facebook-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.viber && (
            <a href={contacts.viber} target="_blank" rel="noopener noreferrer">
              <button className="px-1 py-1 bg-[#665CAC] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-viber-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.instagram && (
            <a
              href={contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 bg-[#E1306C] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-instagram-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}
          {contacts.whatsapp && (
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 bg-[#25D366] rounded-lg">
                <svg className="w-5 h-5 fill-current text-white">
                  <use href="/sprite.svg#icon-whatsapp-svgrepo-com" />
                </svg>
              </button>
            </a>
          )}

          <a href={`tel:${t("header.phone")}`} className="text-base ">
            tel: {t("header.phone")}
          </a>

          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
