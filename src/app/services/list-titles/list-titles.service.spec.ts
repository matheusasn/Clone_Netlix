import { TestBed } from '@angular/core/testing';

import { ListTitlesService } from './list-titles.service';

describe('ListTitlesService', () => {
  let service: ListTitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
