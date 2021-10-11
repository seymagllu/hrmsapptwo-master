import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGithubComponent } from './add-github.component';

describe('AddGithubComponent', () => {
  let component: AddGithubComponent;
  let fixture: ComponentFixture<AddGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
