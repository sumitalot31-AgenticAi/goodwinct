import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Project } from '../../../core/interfaces/project.interface';
import { ProjectService } from '../../../core/services/project.service';

import { ProjectCard } from '../project-card/project-card';

type ProjectTab = 'All' | 'Running' | 'Upcoming' | 'Completed';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProjectCard,
  ],
  templateUrl: './projects-showcase.html',
  styleUrl: './projects-showcase.scss',
})
export class ProjectsShowcase {

  private readonly projectService = inject(ProjectService);

  readonly activeTab = signal<ProjectTab>('All');

  readonly tabs: ProjectTab[] = [
    'All',
    'Running',
    'Upcoming',
    'Completed',  
  ];

  get projects(): Project[] {

    switch (this.activeTab()) {

      case 'Running':
        return this.projectService.getRunningProjects();

      case 'Upcoming':
        return this.projectService.getUpcomingProjects();

      case 'Completed':
        return this.projectService.getCompletedProjects();

      default:
        return this.projectService.getProjects();

    }

  }

  setTab(tab: ProjectTab): void {
    this.activeTab.set(tab);
  }

}