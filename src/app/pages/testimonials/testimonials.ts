import { Component } from '@angular/core';

import { TestimonialsSection } from '../../shared/components/testimonials-section/testimonials-section';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    TestimonialsSection
  ],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {}