export interface Project {

  id: number;

  slug: string;

  name: string;

  shortDescription?: string;

  description: string;

  category: string;

  status: 'Running' | 'Upcoming' | 'Completed';

  location: string;

  address?: string;

  year?: number;

  price: string;

  pricePerSqFt?: number;

  thumbnail: string;

  coverImage: string;

  gallery: string[];

  totalArea?: string;

  plotSizes: string[];

  amenities: string[];

  features: string[];

  brochure?: string;

  googleMap?: string;

  possession?: string;

  rera?: string;

  isFeatured: boolean;

}