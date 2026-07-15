export interface NavigationItem {
  label: string;
  route: string;
  children?: NavigationItem[];
}

export interface Company {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  officeHours: string;
  address: string;
}

export interface Branding {
  logo: string;
  logoLight: string;
  favicon: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface Contact {
  whatsapp: string;
  googleMaps: string;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Button {
  text: string;
  route: string;
}

export interface Cta {
  primaryButton: Button;
  secondaryButton: Button;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Footer {
  copyright: string;
  developer: string;
}

export interface Site {
  company: Company;
  branding: Branding;
  navigation: NavigationItem[];
  social: Social;
  contact: Contact;
  cta: Cta;
  seo: Seo;
  footer: Footer;
}