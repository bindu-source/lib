import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIssuedBookDetailComponent } from './update-issued-book-detail.component';

describe('UpdateIssuedBookDetailComponent', () => {
  let component: UpdateIssuedBookDetailComponent;
  let fixture: ComponentFixture<UpdateIssuedBookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateIssuedBookDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateIssuedBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
