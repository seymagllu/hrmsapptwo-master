import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementFavouriteListComponent } from './job-advertisement-favourite-list.component';

describe('JobAdvertisementFavouriteListComponent', () => {
  let component: JobAdvertisementFavouriteListComponent;
  let fixture: ComponentFixture<JobAdvertisementFavouriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdvertisementFavouriteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementFavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
