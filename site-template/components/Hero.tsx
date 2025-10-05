import { HeroData } from "../types/siteData";

interface HeroProps {
  hero: HeroData;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-100 to-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{hero.subtitle}</p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
