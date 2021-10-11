import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerUpdateComponent } from './employer-update.component';

describe('EmployerUpdateComponent', () => {
  let component: EmployerUpdateComponent;
  let fixture: ComponentFixture<EmployerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
