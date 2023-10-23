import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateY(100%)'
        }),
        animate('2s ease', style({
          opacity: 1, transform: 'translateY(0)'
        }))
      ])
    ])]
})
export class HostingComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if(!this.isVisible){
      const element = document.querySelector('.show-hosting');
      if (element != null) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        this.isVisible = elementPosition < (windowHeight - 100);
      }
    }
   
  }
}
