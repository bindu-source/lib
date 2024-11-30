import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeedbackReportComponent } from './all-feedback-report.component';

describe('AllFeedbackReportComponent', () => {
  let component: AllFeedbackReportComponent;
  let fixture: ComponentFixture<AllFeedbackReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFeedbackReportComponent]
    });
    fixture = TestBed.createComponent(AllFeedbackReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
