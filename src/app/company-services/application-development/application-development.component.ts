import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-application-development',
  templateUrl: './application-development.component.html',
  styleUrls: ['./application-development.component.css'],
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        style({
          opacity: 0, transform: 'translateX(-100%)'
        }),
        animate('1s ease', style({
          opacity: 1, transform: 'translateX(0)'
        }))
      ])
    ])
 
  ]



})
export class ApplicationDevelopmentComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if(!this.isVisible){
      const element = document.querySelector('.show-application-development');
      if (element != null) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        this.isVisible = elementPosition < (windowHeight - 100);
      }
    }
   
  }
}
