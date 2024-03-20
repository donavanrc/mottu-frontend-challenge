import { TestBed } from '@angular/core/testing';

import { FavoritesStateService } from './favorites-state.service';

describe('Favorites.StateService', () => {
  let service: FavoritesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
