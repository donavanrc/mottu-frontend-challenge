import { TestBed } from '@angular/core/testing';

import { TrackByFacadeService } from './track-by-facade.service';

describe('TrackByFacadeService', () => {
  let service: TrackByFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackByFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
