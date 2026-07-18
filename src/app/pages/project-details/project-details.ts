import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../core/interfaces/project.interface';
import { ProjectService } from '../../core/services/project.service';

import { ProjectHero } from '../../shared/components/project-hero/project-hero';
import { ProjectGallery } from '../../shared/components/project-gallery/project-gallery';
import { ProjectCard } from '../../shared/components/project-card/project-card';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    ProjectHero,
    ProjectGallery,
    ProjectCard
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {

  private readonly route = inject(ActivatedRoute);

  private readonly projectService = inject(ProjectService);

  readonly project = signal<Project | undefined>(undefined);
  readonly relatedProjects = signal<Project[]>([]);

 constructor() {

  const slug = this.route.snapshot.paramMap.get('slug');

  if (slug) {

    const project = this.projectService.getProjectBySlug(slug);

    this.project.set(project);

    if (project) {
      this.relatedProjects.set(
        this.projectService.getRelatedProjects(project)
      );
    }

  }

}
}
