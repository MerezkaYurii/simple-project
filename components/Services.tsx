import { Service } from "../types/siteData";

interface ServiceProps {
  services: Service[];
}

export default function Services({ services }: ServiceProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, id) => (
            <div key={id} className="p-6 bg-white border rounded shadow-sm">
              <h3 className="font-semibold  mb-2 ">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
