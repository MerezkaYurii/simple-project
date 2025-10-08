import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="hero">
      <div className="container mx-auto px-6 py-20 text-center bg-gray-100 dark:bg-white/5 rounded-2xl mb-[15px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl  mb-6">{t("hero.subtitle")}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}
