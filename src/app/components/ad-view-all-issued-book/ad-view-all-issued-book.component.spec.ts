import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdViewAllIssuedBookComponent } from './ad-view-all-issued-book.component';

describe('AdViewAllIssuedBookComponent', () => {
  let component: AdViewAllIssuedBookComponent;
  let fixture: ComponentFixture<AdViewAllIssuedBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdViewAllIssuedBookComponent]
    });
    fixture = TestBed.createComponent(AdViewAllIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
