import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
})
export class ProjectGallery {

  readonly images = input.required<string[]>();

  readonly selectedIndex = signal(0);

  readonly selectedImage = computed(() => {

    const gallery = this.images();

    if (!gallery.length) {
      return '';
    }

    return gallery[this.selectedIndex()];

  });

  selectImage(index: number): void {

    this.selectedIndex.set(index);

  }

}