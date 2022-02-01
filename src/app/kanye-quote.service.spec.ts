import { TestBed } from '@angular/core/testing';

import { KanyeQuoteService } from './kanye-quote.service';

describe('KanyeQuoteService', () => {
  let service: KanyeQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanyeQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
