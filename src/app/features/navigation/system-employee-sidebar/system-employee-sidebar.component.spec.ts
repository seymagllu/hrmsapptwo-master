import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeeSidebarComponent } from './system-employee-sidebar.component';

describe('SystemEmployeeSidebarComponent', () => {
  let component: SystemEmployeeSidebarComponent;
  let fixture: ComponentFixture<SystemEmployeeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEmployeeSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEmployeeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
