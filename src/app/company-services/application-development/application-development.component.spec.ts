import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDevelopmentComponent } from './application-development.component';

describe('ApplicationDevelopmentComponent', () => {
  let component: ApplicationDevelopmentComponent;
  let fixture: ComponentFixture<ApplicationDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationDevelopmentComponent]
    });
    fixture = TestBed.createComponent(ApplicationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
