import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ScrollTop } from '../../shared/components/scroll-top/scroll-top';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Footer,
    ScrollTop,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}