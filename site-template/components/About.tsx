import { useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <section className="about">
      <div className="container mx-auto px-6 py-20 text-center bg-gradient-to-r from-sky-500 to-white rounded-2xl mb-[15px]">
        <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
        <p className="text-lg text-gray-700">{t("about.text")}</p>
      </div>
    </section>
  );
}
