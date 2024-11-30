import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdManageUserComponent } from './ad-manage-user.component';

describe('AdManageUserComponent', () => {
  let component: AdManageUserComponent;
  let fixture: ComponentFixture<AdManageUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdManageUserComponent]
    });
    fixture = TestBed.createComponent(AdManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
