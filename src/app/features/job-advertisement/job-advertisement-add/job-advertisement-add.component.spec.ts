import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementAddComponent } from './job-advertisement-add.component';

describe('JobAdvertisementAddComponent', () => {
  let component: JobAdvertisementAddComponent;
  let fixture: ComponentFixture<JobAdvertisementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
