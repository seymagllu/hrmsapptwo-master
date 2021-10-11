import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeUpdateComponent } from './system-employee-update.component';

describe('SystemEmployeeUpdateComponent', () => {
  let component: SystemEmployeeUpdateComponent;
  let fixture: ComponentFixture<SystemEmployeeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
