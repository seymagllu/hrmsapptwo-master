import { TestBed } from '@angular/core/testing';

import { EmployerLoginGuard } from './employer-login.guard';

describe('EmployerLoginGuard', () => {
  let guard: EmployerLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
