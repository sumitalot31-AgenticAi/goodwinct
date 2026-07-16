import { Routes } from '@angular/router';

import { MainLayout } from './layout/main-layout/main-layout';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Gallery } from './pages/gallery/gallery';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';
import { Testimonials } from './pages/testimonials/testimonials';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'projects',
        component: Projects,
      },
      {
        path: 'gallery',
        component: Gallery,
      },
      {
        path: 'blog',
        component: Blog,
      },
      {
        path: 'contact',
        component: Contact,
      },
      {
        path: 'testimonials',
        component: Testimonials,
      },
    ],
  },
  {
  path: 'projects/:slug',
  loadComponent: () =>
    import('./pages/project-details/project-details')
      .then(m => m.ProjectDetails)
}
];