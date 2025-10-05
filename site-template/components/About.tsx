import { AboutData } from "../types/siteData";

interface AboutDataProps {
  about: AboutData;
}

export default function About({ about }: AboutDataProps) {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">{about.title}</h2>
        <p className="text-gray-700">{about.text}</p>
      </div>
    </section>
  );
}
