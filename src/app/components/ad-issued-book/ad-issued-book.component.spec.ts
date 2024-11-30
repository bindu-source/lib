import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdIssuedBookComponent } from './ad-issued-book.component';

describe('AdIssuedBookComponent', () => {
  let component: AdIssuedBookComponent;
  let fixture: ComponentFixture<AdIssuedBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdIssuedBookComponent]
    });
    fixture = TestBed.createComponent(AdIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
