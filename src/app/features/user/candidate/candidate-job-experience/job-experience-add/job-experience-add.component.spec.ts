import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceAddComponent } from './job-experience-add.component';

describe('JobExperienceAddComponent', () => {
  let component: JobExperienceAddComponent;
  let fixture: ComponentFixture<JobExperienceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExperienceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExperienceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
