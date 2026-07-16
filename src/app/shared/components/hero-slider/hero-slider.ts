import {
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeroService } from '../../../core/services/hero.service';
import { HeroSlide } from '../../../core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider implements OnInit, OnDestroy {

  private readonly heroService = inject(HeroService);

  readonly slides: HeroSlide[] = this.heroService.getSlides();

  currentSlide = 0;

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  next(): void {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  previous(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) %
      this.slides.length;
  }

  goTo(index: number): void {
    this.currentSlide = index;
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}