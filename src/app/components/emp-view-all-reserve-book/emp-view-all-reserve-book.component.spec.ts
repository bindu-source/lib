import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewAllReserveBookComponent } from './emp-view-all-reserve-book.component';

describe('EmpViewAllReserveBookComponent', () => {
  let component: EmpViewAllReserveBookComponent;
  let fixture: ComponentFixture<EmpViewAllReserveBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpViewAllReserveBookComponent]
    });
    fixture = TestBed.createComponent(EmpViewAllReserveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
