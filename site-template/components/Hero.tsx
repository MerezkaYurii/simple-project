import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="hero px-2 sm:px-4 lg:px-6 ">
      <div className="container mx-auto py-16  text-center bg-gray-100 dark:bg-white/5 rounded-2xl mb-[15px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          {t("hero.subtitle")}
        </p>
        <button className="px-4 py-2  bg-blue-700 text-white rounded-xl hover:opacity-80 transition  duration-500">
          {t("hero.cta")}
        </button>
      </div>
    </section>
  );
}
