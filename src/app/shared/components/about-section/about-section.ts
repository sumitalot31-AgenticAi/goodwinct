import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AboutService } from '../../../core/services/about.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {

  private readonly aboutService = inject(AboutService);

  readonly about = this.aboutService.getAbout();

}