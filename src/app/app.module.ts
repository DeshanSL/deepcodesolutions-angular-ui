import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { WelcomeModule } from './welcome/welcome.module';
import { ServicesModule } from './services/services.module';
import { CompanyServicesModule } from './company-services/company-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    WelcomeModule, ServicesModule,
    BrowserAnimationsModule,
    CompanyServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
