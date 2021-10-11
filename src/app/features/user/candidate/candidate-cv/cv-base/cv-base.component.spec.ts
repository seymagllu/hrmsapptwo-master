import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBaseComponent } from './cv-base.component';

describe('CvBaseComponent', () => {
  let component: CvBaseComponent;
  let fixture: ComponentFixture<CvBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
