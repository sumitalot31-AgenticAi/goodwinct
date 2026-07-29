import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Blog } from '../../../core/interfaces/blog.interface';


@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCardComponent {

  blog = input.required<Blog>();

}