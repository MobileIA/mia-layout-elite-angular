import { TestBed, inject } from '@angular/core/testing';

import { LayoutTableService } from './layout-table.service';

describe('LayoutTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutTableService]
    });
  });

  it('should be created', inject([LayoutTableService], (service: LayoutTableService) => {
    expect(service).toBeTruthy();
  }));
});
