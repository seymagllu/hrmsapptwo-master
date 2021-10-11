import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementEmployerControlComponent } from './job-advertisement-employer-control.component';

describe('JobAdvertisementEmployerControlComponent', () => {
  let component: JobAdvertisementEmployerControlComponent;
  let fixture: ComponentFixture<JobAdvertisementEmployerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementEmployerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementEmployerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
