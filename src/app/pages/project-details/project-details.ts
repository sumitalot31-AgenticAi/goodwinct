import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../core/interfaces/project.interface';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
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