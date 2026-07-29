import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog.interface';

import { BlogCardComponent } 
from '../blog-card/blog-card';


@Component({
  selector: 'app-latest-blogs',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent
  ],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.scss'
})
export class LatestBlogsComponent {

  private blogService = inject(BlogService);

  blogs: Blog[] = this.blogService.getLatestBlogs(3);

}