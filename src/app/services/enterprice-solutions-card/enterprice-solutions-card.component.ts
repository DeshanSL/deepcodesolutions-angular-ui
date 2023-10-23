import { Component, HostListener, Input } from '@angular/core';
import { animate, style, trigger, transition } from '@angular/animations'



const enterTransition  = transition(':enter',[
  style({
    opacity:0
  }), 
  animate('1s ease-in', style({
    opacity:1
  }))
])

const fadeIn = trigger('fadeIn',[
  enterTransition
])
@Component({
  selector: 'app-enterprice-solutions-card',
  templateUrl: './enterprice-solutions-card.component.html',
  styleUrls: ['./enterprice-solutions-card.component.css'],
  animations:[
    fadeIn
  ]
})
export class EnterpriceSolutionsCardComponent {
  /**
   *
   */
  constructor() {
    
    
  }
  @Input()
  title!: string;
  @Input()
  info!: string;

  @Input()
  cardListItems!: string[];

}
