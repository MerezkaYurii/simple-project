import { useTranslation } from "next-i18next";

export default function Services() {
  const { t } = useTranslation("common");
  const services = t("services.items", { returnObjects: true }) as {
    id: number;
    name: string;
    desc: string;
  }[];
  return (
    <section className=" bg-slate-500">
      <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-sky-500 to-white rounded-2xl mb-[15px]">
        <h2 className="text-2xl font-bold mb-6">{t("services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white border rounded shadow-sm"
            >
              <h3 className="font-semibold  mb-2 ">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
