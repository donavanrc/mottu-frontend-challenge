import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable()
export class FavoritesStateService {

  private _favorites$ = new BehaviorSubject<Character[]>([]);

  favorites$ = this._favorites$.asObservable();

  addFavorite(character: Character): void {
    const currentValue = this._favorites$.getValue();
    this._favorites$.next([...currentValue, character]);
  }

  removeFavorite(characterId: number): void {
    const currentValue = this._favorites$.getValue();
    this._favorites$.next(currentValue.filter(character => character.id !== characterId));
  }
}
