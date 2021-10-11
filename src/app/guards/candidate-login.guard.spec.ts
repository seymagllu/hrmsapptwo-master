import { TestBed } from '@angular/core/testing';

import { CandidateLoginGuard } from './candidate-login.guard';

describe('CandidateLoginGuard', () => {
  let guard: CandidateLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
