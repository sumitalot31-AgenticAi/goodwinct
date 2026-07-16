import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ProjectService } from '../../../core/services/project.service';

import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-running-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCard,
  ],
  templateUrl: './running-projects.html',
  styleUrl: './running-projects.scss',
})
export class RunningProjects {

  private readonly projectService = inject(ProjectService);

  readonly projects = this.projectService.getRunningProjects();

}