import { Injectable } from '@angular/core';

import testimonialsData from '../../../assets/data/testimonials.json';

import { Testimonials } from '../interfaces/testimonials.interface';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {

  getTestimonials(): Testimonials {

    return testimonialsData as Testimonials;

  }

}