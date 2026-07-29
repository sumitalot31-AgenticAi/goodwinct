import { Component, inject } from '@angular/core';

import { TestimonialsService } from '../../../core/services/testimonials.service';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.scss',
})
export class TestimonialsSection {

  private readonly testimonialsService = inject(TestimonialsService);

  readonly testimonials = this.testimonialsService.getTestimonials();

}