import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdManageFineComponent } from './ad-manage-fine.component';

describe('AdManageFineComponent', () => {
  let component: AdManageFineComponent;
  let fixture: ComponentFixture<AdManageFineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdManageFineComponent]
    });
    fixture = TestBed.createComponent(AdManageFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
