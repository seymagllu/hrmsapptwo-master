import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementVerificationComponent } from './job-advertisement-verification.component';

describe('JobAdvertisementVerificationComponent', () => {
  let component: JobAdvertisementVerificationComponent;
  let fixture: ComponentFixture<JobAdvertisementVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
