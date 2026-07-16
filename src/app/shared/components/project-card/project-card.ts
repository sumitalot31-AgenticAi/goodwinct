import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Project } from '../../../core/interfaces/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  readonly project = input.required<Project>();

}