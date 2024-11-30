import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpbookComponent } from './empbook.component';

describe('EmpbookComponent', () => {
  let component: EmpbookComponent;
  let fixture: ComponentFixture<EmpbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpbookComponent]
    });
    fixture = TestBed.createComponent(EmpbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
