import { Injectable } from '@angular/core';

import { Blog } from '../interfaces/blog.interface';

import blogs from '../../../assets/data/blogs.json';


@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private blogList: Blog[] = blogs;



  getBlogs(): Blog[] {

    return this.blogList;

  }



  getLatestBlogs(limit: number = 3): Blog[] {

    return this.blogList.slice(0, limit);

  }



  getBlogBySlug(slug: string): Blog | undefined {

    return this.blogList.find(
      blog => blog.slug === slug
    );

  }


}