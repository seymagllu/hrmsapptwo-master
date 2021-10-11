import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkedinComponent } from './add-linkedin.component';

describe('AddLinkedinComponent', () => {
  let component: AddLinkedinComponent;
  let fixture: ComponentFixture<AddLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
