import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Site } from '../../core/interfaces/site.interface';
import { SiteService } from '../../core/services/site.service';

import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ScrollTopComponent  } from '../../shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Navbar,
    Footer,
    ScrollTopComponent ,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  private readonly siteService = inject(SiteService);

  readonly site: Site = this.siteService.getSite();
}