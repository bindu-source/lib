import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdIssueNewBookComponent } from './ad-issue-new-book.component';

describe('AdIssueNewBookComponent', () => {
  let component: AdIssueNewBookComponent;
  let fixture: ComponentFixture<AdIssueNewBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdIssueNewBookComponent]
    });
    fixture = TestBed.createComponent(AdIssueNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
