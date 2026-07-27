import { Injectable } from '@angular/core';

import projects from '../../../assets/data/projects.json';

import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private readonly projects: Project[] = projects as Project[];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.isFeatured);
  }

  getRunningProjects(): Project[] {
    return this.projects.filter(
      project => project.status === 'Running'
    );
  }

  getUpcomingProjects(): Project[] {
    return this.projects.filter(
      project => project.status === 'Upcoming'
    );
  }

  getCompletedProjects(): Project[] {
    return this.projects.filter(
      project => project.status === 'Completed'
    );
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(
      project => project.slug === slug
    );
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(
      project =>
        project.category.toLowerCase() === category.toLowerCase()
    );
  }

  getProjectsByLocation(location: string): Project[] {
    return this.projects.filter(
      project =>
        project.location.toLowerCase() === location.toLowerCase()
    );
  }

  searchProjects(keyword: string): Project[] {
    return this.projects.filter(project =>
      project.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  getRelatedProjects(project: Project): Project[] {

  return this.projects
    .filter(item =>
      item.id !== project.id &&
      item.category === project.category &&
      item.status !== 'Completed'
    )
    .sort((a, b) => {

      const priority = {
        Running: 1,
        Upcoming: 2
      };

      return (
        (priority[a.status as keyof typeof priority] ?? 99) -
        (priority[b.status as keyof typeof priority] ?? 99)
      );

    })
    .slice(0, 3);

}
}