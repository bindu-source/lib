import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdViewAllReserveBookComponent } from './ad-view-all-reserve-book.component';

describe('AdViewAllReserveBookComponent', () => {
  let component: AdViewAllReserveBookComponent;
  let fixture: ComponentFixture<AdViewAllReserveBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdViewAllReserveBookComponent]
    });
    fixture = TestBed.createComponent(AdViewAllReserveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
