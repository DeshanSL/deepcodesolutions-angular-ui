import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSloganTypewriterComponent } from './welcome-slogan-typewriter/welcome-slogan-typewriter.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    WelcomeSloganTypewriterComponent
  ],
  imports: [
    CommonModule,NgxTypedJsModule
    
  ],
  exports:[
    WelcomeSloganTypewriterComponent
  ]
})
export class WelcomeModule { }
