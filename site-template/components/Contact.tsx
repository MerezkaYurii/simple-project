import { ContactData } from "../types/siteData";
import { useTranslation } from "next-i18next";

interface ContactDataProps {
  contact: ContactData;
}

export default function About({ contact }: ContactDataProps) {
  const { t } = useTranslation("common");
  const mailTo = `mailto:${contact.email}?subject=Заказ%20сайта`;
  return (
    <section id="contact" className=" bg-slate-400">
      <div className="container mx-auto px-6  py-16 text-center bg-gradient-to-r from-sky-500 to-white rounded-2xl mb-[15px]">
        <h2 className="text-2xl font-bold mb-4">{t("contact.title")}</h2>
        <p className="mb-2">
          {t("contact.phone")}:{" "}
          <a href={`tel:${contact.phone}`} className="underline">
            {contact.phone}
          </a>
        </p>
        <p className="mb-4">
          {t("contact.email")}:{" "}
          <a href={mailTo} className="underline">
            {contact.email}
          </a>
        </p>
        <a
          href={mailTo}
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-md"
        >
          {t("contact.button")}
        </a>
      </div>
    </section>
  );
}
