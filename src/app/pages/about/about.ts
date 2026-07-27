import { Component } from '@angular/core';
import { AboutHero } from '../../shared/components/about-hero/about-hero';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AboutHero
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}