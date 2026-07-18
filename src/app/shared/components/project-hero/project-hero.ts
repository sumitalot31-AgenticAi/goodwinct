import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Project } from '../../../core/interfaces/project.interface';

@Component({
  selector: 'app-project-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-hero.html',
  styleUrl: './project-hero.scss',
})
export class ProjectHero {

  readonly project = input.required<Project>();

}