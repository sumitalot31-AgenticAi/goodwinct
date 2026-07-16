import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ProjectService } from '../../../core/services/project.service';

import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-upcoming-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCard,
  ],
  templateUrl: './upcoming-projects.html',
  styleUrl: './upcoming-projects.scss',
})
export class UpcomingProjects {

  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.getUpcomingProjects();

}