import { NgClass, ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarVisible = true;
  private lastScrollTop = 0;

  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  constructor(private viewPortScroller: ViewportScroller) { }

  collapseNavbar(): void {
    if (window.innerWidth < 992) {
      this.navbarToggler.nativeElement.click();
    }
  }

  scrollto(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }

  private scrollThreshold = 100; // ajusta este valor según tus necesidades

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      // Scrolling down and past the threshold
      this.isNavbarVisible = false;
    } else {
      // Scrolling up or above the threshold
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
