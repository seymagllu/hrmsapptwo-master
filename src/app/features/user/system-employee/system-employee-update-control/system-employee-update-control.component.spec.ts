import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeUpdateControlComponent } from './system-employee-update-control.component';

describe('SystemEmployeeUpdateControlComponent', () => {
  let component: SystemEmployeeUpdateControlComponent;
  let fixture: ComponentFixture<SystemEmployeeUpdateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeUpdateControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeUpdateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
