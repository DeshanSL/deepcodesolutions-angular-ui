import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome-slogan-typewriter',
  templateUrl: './welcome-slogan-typewriter.component.html',
  styleUrls: ['./welcome-slogan-typewriter.component.css']
})
export class WelcomeSloganTypewriterComponent {
  /**
   *
   */
  constructor() {

  }
  ngInInit(): void {
    const slogan = document.querySelector('.slogan-typewriter');
  }
}
