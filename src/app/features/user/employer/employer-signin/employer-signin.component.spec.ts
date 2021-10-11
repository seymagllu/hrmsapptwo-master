import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSigninComponent } from './employer-signin.component';

describe('EmployerSigninComponent', () => {
  let component: EmployerSigninComponent;
  let fixture: ComponentFixture<EmployerSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
