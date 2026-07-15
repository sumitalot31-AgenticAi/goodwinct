import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Site } from '../../core/interfaces/site.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly site = input.required<Site>();
}