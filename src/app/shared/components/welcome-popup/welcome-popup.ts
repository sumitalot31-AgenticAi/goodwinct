import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PopupService } from '../../../core/services/popup.service';

@Component({
  selector: 'app-welcome-popup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome-popup.html',
  styleUrl: './welcome-popup.scss',
})
export class WelcomePopupComponent implements OnInit {
  private readonly popupService = inject(PopupService);

  readonly popup = this.popupService.getPopup();

  readonly isVisible = signal(false);

  ngOnInit(): void {
    if (!this.popup.enabled) {
      return;
    }

    const popupSeen = localStorage.getItem('goodwincity-popup');

    if (this.popup.showOnce && popupSeen) {
      return;
    }

    setTimeout(() => {
      this.isVisible.set(true);
    }, 400);
  }

  close(): void {
    this.isVisible.set(false);

    if (this.popup.showOnce) {
      localStorage.setItem('goodwincity-popup', 'true');
    }
  }
}