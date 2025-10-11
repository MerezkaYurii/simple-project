/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-[#00B4D8] text-white py-6 ">
      <div className="container mx-auto px-6 text-center">
        © {new Date().getFullYear()} {t("header.siteTitle")} —{" "}
        {t("footer.text")} ♥
      </div>
    </footer>
  );
}
