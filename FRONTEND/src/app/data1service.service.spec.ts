import { TestBed } from '@angular/core/testing';

import { Data1serviceService } from './data1service.service';

describe('Data1serviceService', () => {
  let service: Data1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
