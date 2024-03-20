import { TestBed } from '@angular/core/testing';

import { CharacterFacadeService } from './character-facade.service';

describe('CharacterFacadeService', () => {
  let service: CharacterFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
