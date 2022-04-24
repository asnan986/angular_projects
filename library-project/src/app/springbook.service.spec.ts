import { TestBed } from '@angular/core/testing';

import { SpringbookService } from './springbook.service';

describe('SpringbookService', () => {
  let service: SpringbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
