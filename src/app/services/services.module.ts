import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriceSolutionsCardComponent } from './enterprice-solutions-card/enterprice-solutions-card.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AnimationTestModule } from '../animation-test/animation-test.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EnterpriceSolutionsCardComponent,
    ServicesPageComponent
  ],
  imports: [
    CommonModule, AnimationTestModule, BrowserAnimationsModule
  ],
  exports:[
    EnterpriceSolutionsCardComponent, ServicesPageComponent
  ]
})
export class ServicesModule { }

