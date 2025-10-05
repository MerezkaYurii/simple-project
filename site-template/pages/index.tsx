import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import data from "../data/siteData.json";
import { SiteData } from "../types/siteData";

export default function Home() {
  const siteData = data as SiteData;

  return (
    <>
      <Header siteTitle={siteData.siteTitle} phone={siteData.contact.phone} />
      <main>
        <Hero hero={siteData.hero} />
        <About about={siteData.about} />
        <Services services={siteData.services} />
        <Contact contact={siteData.contact} />
      </main>
      <Footer siteTitle={siteData.siteTitle} />
    </>
  );
}
