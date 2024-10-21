import { TestBed } from '@angular/core/testing';

import { RectangleResolver } from './rectangle.resolver';

describe('RectangleResolver', () => {
  let resolver: RectangleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RectangleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
