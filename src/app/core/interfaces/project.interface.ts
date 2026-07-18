export interface Project {

  id: number;

  slug: string;

  name: string;

  description: string;

  shortDescription?: string;

  category: string;

  status: 'Running' | 'Upcoming' | 'Completed';

  location: string;

  address?: string;

  year?: number;

  price: string;

  pricePerSqFt?: number;

  cardImage: string;

  coverImage: string;

  gallery: string[];

  totalArea?: string;

  plotSizes?: string[];

  amenities?: string[];

  features?: string[];

  brochure?: string;

  googleMap?: string;

  possession?: string;

  rera?: string;

  isFeatured: boolean;

}