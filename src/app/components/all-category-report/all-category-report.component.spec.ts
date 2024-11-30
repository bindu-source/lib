import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryReportComponent } from './all-category-report.component';

describe('AllCategoryReportComponent', () => {
  let component: AllCategoryReportComponent;
  let fixture: ComponentFixture<AllCategoryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCategoryReportComponent]
    });
    fixture = TestBed.createComponent(AllCategoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
