import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterApiService } from './character-api.service';

describe('CharacterApiService', () => {
  let service: CharacterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterApiService]
    });
    service = TestBed.inject(CharacterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
