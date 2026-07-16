export interface Project {

  id: number;

  slug: string;

  name: string;

  description: string;

  category: string;

  status: 'Running' | 'Upcoming' | 'Completed';

  location: string;

  year?: number;

  price: string;

  image: string;

  isFeatured: boolean;

  shortDescription?: string;

  address?: string;

  gallery?: string[];

  totalArea?: string;

  plotSizes?: string[];

  pricePerSqFt?: number;

  amenities?: string[];

  features?: string[];

  brochure?: string;

  googleMap?: string;

  possession?: string;

  rera?: string;

}