import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementListByCompanyComponent } from './job-advertisement-list-by-company.component';

describe('JobAdvertisementListByCompanyComponent', () => {
  let component: JobAdvertisementListByCompanyComponent;
  let fixture: ComponentFixture<JobAdvertisementListByCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementListByCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementListByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
