import { TestBed, inject } from '@angular/core/testing';

import { LayoutMenuService } from './layout-menu.service';

describe('LayoutMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutMenuService]
    });
  });

  it('should be created', inject([LayoutMenuService], (service: LayoutMenuService) => {
    expect(service).toBeTruthy();
  }));
});
