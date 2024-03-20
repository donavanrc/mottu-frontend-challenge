import { TestBed } from '@angular/core/testing';

import { FavoritesFacadeService } from './favorites-facade.service';

describe('FavoritesFacadeService', () => {
  let service: FavoritesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
