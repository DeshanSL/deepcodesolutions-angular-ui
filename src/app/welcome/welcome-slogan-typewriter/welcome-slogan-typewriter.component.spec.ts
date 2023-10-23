import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSloganTypewriterComponent } from './welcome-slogan-typewriter.component';

describe('WelcomeSloganTypewriterComponent', () => {
  let component: WelcomeSloganTypewriterComponent;
  let fixture: ComponentFixture<WelcomeSloganTypewriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeSloganTypewriterComponent]
    });
    fixture = TestBed.createComponent(WelcomeSloganTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
