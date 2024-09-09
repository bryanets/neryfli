import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgClass],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  isLargeScreen: boolean = true;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Verificar si estamos en un entorno del navegador
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.checkScreenSize(); // Verificar el tamaño de la pantalla si estamos en el navegador
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    // Solo se ejecuta si estamos en el navegador
    if (this.isBrowser) {
      const width = window.innerWidth;
      this.isLargeScreen = width > 970;
    }
  }
}
