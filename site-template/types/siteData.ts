export interface HeroData {
  title: string;
  subtitle: string;
  cta: string;
}

export interface AboutData {
  title: string;
  text: string;
}

export interface Service {
  id?: number;
  title: string;
  desc: string;
}

export interface ContactData {
  phone: string;
  email: string;
}

export interface SiteData {
  siteTitle: string;
  hero: HeroData;
  about: AboutData;
  services: Service[];
  contact: ContactData;
}
