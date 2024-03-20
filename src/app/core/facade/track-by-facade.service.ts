import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByFacadeService {

  constructor() { }

  trackById(index: number, item: any) {
    return item ? item.id : null;
  }
}
