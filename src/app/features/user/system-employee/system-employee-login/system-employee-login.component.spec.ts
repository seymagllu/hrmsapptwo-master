import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeLoginComponent } from './system-employee-login.component';

describe('SystemEmployeeLoginComponent', () => {
  let component: SystemEmployeeLoginComponent;
  let fixture: ComponentFixture<SystemEmployeeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
