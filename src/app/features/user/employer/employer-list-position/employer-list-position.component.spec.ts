import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerListPositionComponent } from './employer-list-position.component';

describe('EmployerListPositionComponent', () => {
  let component: EmployerListPositionComponent;
  let fixture: ComponentFixture<EmployerListPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerListPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerListPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
