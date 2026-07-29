import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';

import { StatsService } from '../../../core/services/stats.service';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  templateUrl: './stats-counter.html',
  styleUrl: './stats-counter.scss',
})
export class StatsCounter implements AfterViewInit {

  private readonly statsService = inject(StatsService);

  readonly stats = this.statsService.getStats();

  @ViewChild('statsSection')
  statsSection!: ElementRef<HTMLElement>;

  readonly counters = signal<number[]>([]);

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {

    this.counters.set(
      this.stats.items.map(() => 0)
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          this.startCounters();

          this.observer.disconnect();

        }

      },
      {
        threshold: 0.4,
      }
    );

    this.observer.observe(this.statsSection.nativeElement);

  }

  private startCounters(): void {

    const duration = 2000;

    const start = performance.now();

    const animate = (time: number) => {

      const progress = Math.min((time - start) / duration, 1);

      this.counters.set(

        this.stats.items.map(item =>
          Math.floor(item.value * progress)
        )

      );

      if (progress < 1) {

        requestAnimationFrame(animate);

      }

    };

    requestAnimationFrame(animate);

  }

}