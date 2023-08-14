import { TestBed } from '@angular/core/testing';

import { StorageServiceService as TareaService } from '../storage-service.service';

describe('StorageServiceService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
