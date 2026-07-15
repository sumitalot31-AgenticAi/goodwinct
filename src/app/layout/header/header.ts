import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Site } from '../../core/interfaces/site.interface';
import { SiteService } from '../../core/services/site.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private readonly siteService = inject(SiteService);

  site!: Site;

  ngOnInit(): void {
    this.siteService.getSite().subscribe({
      next: (data) => (this.site = data),
      error: (err) => console.error('Failed to load site configuration', err),
    });
  }
}