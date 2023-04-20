import { TestBed } from '@angular/core/testing';

import { UserInterceptor } from './user.interceptor';

describe('UserInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserInterceptor = TestBed.inject(UserInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
