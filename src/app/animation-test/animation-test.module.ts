import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInComponent } from './fade-in/fade-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    FadeInComponent
  ],
  imports: [
    CommonModule, BrowserAnimationsModule
  ],exports:[
    FadeInComponent
  ]
})
export class AnimationTestModule { 



}
