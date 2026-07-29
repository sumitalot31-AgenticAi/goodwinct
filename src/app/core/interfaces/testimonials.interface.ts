export interface Testimonials {

  title: string;

  subtitle: string;

  description: string;

  items: Testimonial[];

}

export interface Testimonial {

  id: number;

  name: string;

  location: string;

  rating: number;

  image: string;

  review: string;

}