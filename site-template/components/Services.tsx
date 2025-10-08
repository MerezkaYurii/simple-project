import { useTranslation } from "next-i18next";

export default function Services() {
  const { t } = useTranslation("common");
  const services = t("services.items", { returnObjects: true }) as {
    id: number;
    name: string;
    desc: string;
  }[];
  return (
    <section className="">
      <div className="container mx-auto px-6 py-16 bg-gray-100 dark:bg-white/5 rounded-2xl mb-[15px]">
        <h2 className="text-2xl font-bold mb-6">{t("services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-wrap">
          {services?.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white dark:bg-gray-100 border rounded-xl shadow-sm shadow-gray-400"
            >
              <h3 className="font-semibold  mb-2 dark:text-gray-900">
                {service.name}
              </h3>
              <p className="text-sm font-semibold dark:text-gray-900">
                {service.desc}
              </p>
              <p className="text-sm dark:text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                officia vitae ullam esse ad libero iusto laudantium obcaecati
                eveniet ducimus accusantium aspernatur eius, provident rem est,
                eligendi, a veritatis quod?
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
