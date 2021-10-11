import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSigninComponent } from './candidate-signin.component';

describe('CandidateSigninComponent', () => {
  let component: CandidateSigninComponent;
  let fixture: ComponentFixture<CandidateSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
