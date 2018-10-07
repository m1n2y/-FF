import { TestBed, inject } from '@angular/core/testing';

import { BookinglistService } from './bookinglist.service';

describe('BookinglistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookinglistService]
    });
  });

  it('should be created', inject([BookinglistService], (service: BookinglistService) => {
    expect(service).toBeTruthy();
  }));
});
