import { TestBed } from '@angular/core/testing';

import { CalcmeService } from './calcme.service';

describe('CalcmeService', () => {
  let service: CalcmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
