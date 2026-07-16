import { Component } from '@angular/core';

import { HeroSlider } from '../../shared/components/hero-slider/hero-slider';
import { PropertySearch } from '../../shared/components/property-search/property-search';
import { ProjectsShowcase } from '../../shared/components/projects-showcase/projects-showcase';
import { AboutSection } from '../../shared/components/about-section/about-section';
import { WhyChooseUs } from '../../shared/components/why-choose-us/why-choose-us';
import { StatsCounter } from '../../shared/components/stats-counter/stats-counter';
import { TestimonialsSection } from '../../shared/components/testimonials-section/testimonials-section';
import { LatestBlogs } from '../../shared/components/latest-blogs/latest-blogs';
import { ContactCta } from '../../shared/components/contact-cta/contact-cta';
import { GoogleMap } from '../../shared/components/google-map/google-map';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSlider,
    PropertySearch,
    ProjectsShowcase,
    AboutSection,
    WhyChooseUs,
    StatsCounter,
    TestimonialsSection,
    LatestBlogs,
    ContactCta,
    GoogleMap,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}