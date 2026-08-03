import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SiteService } from '../../../core/services/site.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports:[
    RouterLink,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  private readonly siteService = inject(SiteService);

  readonly site = this.siteService.getSite();

}