export interface HeroData {
  title: string;
  subtitle: string;
  cta: string;
}

export interface ContactsData {
  telegram?: string;
  viber?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
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
  address?: string;
}

export interface SiteData {
  siteTitle: string;
  contacts: ContactsData;
  hero: HeroData;
  about: AboutData;
  services: Service[];
  contact: ContactData;
}
