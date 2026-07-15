import { CommonModule } from '@angular/common';
import { Component, HostListener, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Site } from '../../core/interfaces/site.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  readonly site = input.required<Site>();

  readonly mobileMenuOpen = signal(false);

  readonly scrolled = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

}