import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import{ScrollTopComponent} from './shared/components/scroll-top/scroll-top';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScrollTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}