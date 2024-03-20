import { TestBed } from '@angular/core/testing';

import { CharacterApiService } from './character-api.service';

describe('CharacterService', () => {
  let service: CharacterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
