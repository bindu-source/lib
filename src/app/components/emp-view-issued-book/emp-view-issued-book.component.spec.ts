import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewIssuedBookComponent } from './emp-view-issued-book.component';

describe('EmpViewIssuedBookComponent', () => {
  let component: EmpViewIssuedBookComponent;
  let fixture: ComponentFixture<EmpViewIssuedBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpViewIssuedBookComponent]
    });
    fixture = TestBed.createComponent(EmpViewIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
