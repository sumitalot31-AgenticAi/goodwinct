import { Component, inject } from '@angular/core';

import { SiteService } from '../../../core/services/site.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.scss',
})
export class AboutHero {

  private readonly siteService = inject(SiteService);

  readonly site = this.siteService.getSite();

}