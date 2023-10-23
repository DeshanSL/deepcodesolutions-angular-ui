import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  show = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {

    const element = document.querySelector('.services-content');
    if (element != null) {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      this.show = elementPosition < (windowHeight - 100);
     
    }
  }
}
