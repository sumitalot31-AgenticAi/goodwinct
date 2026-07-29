import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FloatingActionsService } from '../../../core/services/floating-actions.service';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.scss',
})
export class FloatingActionsComponent {
  private readonly floatingActionsService = inject(FloatingActionsService);

  readonly data = this.floatingActionsService.getData();

  get whatsappLink(): string {
    const number = this.data.whatsapp.phone.replace(/\+/g, '');
    const message = encodeURIComponent(this.data.whatsapp.message);

    return `https://wa.me/${number}?text=${message}`;
  }
}