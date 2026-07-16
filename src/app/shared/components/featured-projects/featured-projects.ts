import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectService } from '../../../core/services/project.service';

import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCard,
  ],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {

  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.getFeaturedProjects();

}