import { TestBed } from '@angular/core/testing';

import { MovieFetchService } from './movie-fetch.service';

describe('MovieFetchService', () => {
  let service: MovieFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
