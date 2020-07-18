import { TestBed } from '@angular/core/testing';

import { StpoaService } from './stpoa.service';

describe('StpoaService', () => {
  let service: StpoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StpoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
