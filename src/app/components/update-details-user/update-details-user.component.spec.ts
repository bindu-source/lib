import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsUserComponent } from './update-details-user.component';

describe('UpdateDetailsUserComponent', () => {
  let component: UpdateDetailsUserComponent;
  let fixture: ComponentFixture<UpdateDetailsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDetailsUserComponent]
    });
    fixture = TestBed.createComponent(UpdateDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
