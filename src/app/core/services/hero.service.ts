import { Injectable } from '@angular/core';

import heroData from '../../../assets/data/hero.json';
import { HeroSlide } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getSlides(): HeroSlide[] {
    return heroData as HeroSlide[];
  }
}