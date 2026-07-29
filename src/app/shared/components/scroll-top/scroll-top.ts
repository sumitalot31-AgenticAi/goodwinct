import { Component, HostListener, signal } from '@angular/core';


@Component({
  selector: 'app-scroll-top',
  standalone: true,
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss'
})
export class ScrollTopComponent {


  showButton = signal(false);



  @HostListener('window:scroll')
  onScroll() {

    this.showButton.set(window.scrollY > 400);

  }



  scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


}