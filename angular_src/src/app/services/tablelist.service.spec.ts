import { TestBed, inject } from '@angular/core/testing';

import { TablelistService } from './tablelist.service';

describe('TablelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablelistService]
    });
  });

  it('should be created', inject([TablelistService], (service: TablelistService) => {
    expect(service).toBeTruthy();
  }));
});
