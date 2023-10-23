import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDevelopmentComponent } from './application-development/application-development.component';
import { HostingComponent } from './hosting/hosting.component';



@NgModule({
  declarations: [
    ApplicationDevelopmentComponent,
    HostingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ApplicationDevelopmentComponent,
    HostingComponent
  ]
})
export class CompanyServicesModule { }
