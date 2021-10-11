import { TestBed } from '@angular/core/testing';

import { SystemEmployeeLoginGuard } from './system-employee-login.guard';

describe('SystemEmployeeLoginGuard', () => {
  let guard: SystemEmployeeLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SystemEmployeeLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
