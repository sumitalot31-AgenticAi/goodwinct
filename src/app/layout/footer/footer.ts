import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Site } from '../../core/interfaces/site.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  readonly site = input.required<Site>();

  readonly currentYear = new Date().getFullYear();

}