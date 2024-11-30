import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdViewRequestBookDataComponent } from './ad-view-request-book-data.component';

describe('AdViewRequestBookDataComponent', () => {
  let component: AdViewRequestBookDataComponent;
  let fixture: ComponentFixture<AdViewRequestBookDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdViewRequestBookDataComponent]
    });
    fixture = TestBed.createComponent(AdViewRequestBookDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
