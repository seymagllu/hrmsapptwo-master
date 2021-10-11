import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeInformationComponent } from './system-employee-information.component';

describe('SystemEmployeeInformationComponent', () => {
  let component: SystemEmployeeInformationComponent;
  let fixture: ComponentFixture<SystemEmployeeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
