import { TestBed, inject } from '@angular/core/testing';

import { LayoutEliteService } from './layout-elite.service';

describe('LayoutEliteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutEliteService]
    });
  });

  it('should be created', inject([LayoutEliteService], (service: LayoutEliteService) => {
    expect(service).toBeTruthy();
  }));
});
