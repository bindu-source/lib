import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBookRequestComponent } from './emp-book-request.component';

describe('EmpBookRequestComponent', () => {
  let component: EmpBookRequestComponent;
  let fixture: ComponentFixture<EmpBookRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpBookRequestComponent]
    });
    fixture = TestBed.createComponent(EmpBookRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
