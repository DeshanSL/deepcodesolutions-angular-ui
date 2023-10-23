import { Component, HostListener, Input } from '@angular/core';
import { animate, style, trigger, transition } from '@angular/animations'
const enterTrasition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('1s ease-in', style({
    opacity: 1
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTrasition
])
@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.css'],
  animations: [
    fadeIn
  ]
})
export class FadeInComponent {
  isVisible = true;
  @Input()
  id = "";


  changeTextState(): void {
    this.isVisible = !this.isVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const element = document.querySelector('.' + this.id);
    if (element != null) {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      this.isVisible = elementPosition < (windowHeight - 100) && 0 < elementPosition ;
      console.log( element.getBoundingClientRect().top + "   id:"+this.id.toString() + "     window: " + windowHeight)
    }
  }
}
