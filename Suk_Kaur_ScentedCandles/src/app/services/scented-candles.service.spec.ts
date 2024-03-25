import { TestBed } from '@angular/core/testing';

import { ScentedCandlesService } from './scented-candles.service';

describe('ScentedCandlesService', () => {
  let service: ScentedCandlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScentedCandlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
