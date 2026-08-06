import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoadingService } from './core/services/loading.service';
import { LoadingSpinner } from './shared/components/loading-spinner/loading-spinner';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingSpinner,
    ScrollTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {

  loadingService = inject(LoadingService);

  ngOnInit(): void {
  console.log('Before:', this.loadingService.isLoading());

  setTimeout(() => {
    this.loadingService.hide();
    console.log('After:', this.loadingService.isLoading());
  }, 5000);
}
}