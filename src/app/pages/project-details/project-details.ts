import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectHero } from '../../shared/components/project-hero/project-hero';
import { Project } from '../../core/interfaces/project.interface';
import { ProjectService } from '../../core/services/project.service';
import { ProjectGallery } from '../../shared/components/project-gallery/project-gallery';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, ProjectHero, ProjectGallery],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {

  private readonly route = inject(ActivatedRoute);

  private readonly projectService = inject(ProjectService);

  readonly project = signal<Project | undefined>(undefined);

  constructor() {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.project.set(
        this.projectService.getProjectBySlug(slug)
      );
    }

  }

}