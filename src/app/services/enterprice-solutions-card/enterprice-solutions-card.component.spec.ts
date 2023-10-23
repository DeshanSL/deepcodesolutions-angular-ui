import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriceSolutionsCardComponent } from './enterprice-solutions-card.component';

describe('EnterpriceSolutionsCardComponent', () => {
  let component: EnterpriceSolutionsCardComponent;
  let fixture: ComponentFixture<EnterpriceSolutionsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriceSolutionsCardComponent]
    });
    fixture = TestBed.createComponent(EnterpriceSolutionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
