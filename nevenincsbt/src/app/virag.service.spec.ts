import { TestBed } from '@angular/core/testing';

import { ViragService } from './virag.service';

describe('ViragService', () => {
  let service: ViragService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViragService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
