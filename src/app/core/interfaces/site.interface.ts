export interface Site {
  company: Company;
  branding: Branding;
  social: Social;
  seo: Seo;
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
  favicon: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}