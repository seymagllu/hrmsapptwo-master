import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddPositionComponent } from './employer-add-position.component';

describe('EmployerAddPositionComponent', () => {
  let component: EmployerAddPositionComponent;
  let fixture: ComponentFixture<EmployerAddPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerAddPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerAddPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
