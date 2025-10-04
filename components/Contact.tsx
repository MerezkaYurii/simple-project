import { ContactData } from "../types/siteData";

interface ContactDataProps {
  contact: ContactData;
}

export default function About({ contact }: ContactDataProps) {
  const mailTo = `mailto:${contact.email}?subject=Заказ%20сайта`;
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Контакты</h2>
        <p className="mb-2">
          Телефон:{" "}
          <a href={`tel:${contact.phone}`} className="underline">
            {contact.phone}
          </a>
        </p>
        <p className="mb-4">
          Email:{" "}
          <a href={mailTo} className="underline">
            {contact.email}
          </a>
        </p>
        <a
          href={mailTo}
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-md"
        >
          Написать
        </a>
      </div>
    </section>
  );
}
