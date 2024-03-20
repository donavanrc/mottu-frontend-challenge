import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class FavoritesStateService {

  private _favorites$ = new BehaviorSubject<Character[]>([]);

  favorites$ = this._favorites$.asObservable();

  addFavorite(character: Character): void {
    const currentValue = this._favorites$.getValue();
    this._favorites$.next([...currentValue, character]);
  }

  removeFavorite(character: Character): void {
    const currentValue = this._favorites$.getValue();
    this._favorites$.next(currentValue.filter(currCharacter => currCharacter.id !== character.id));
  }

  containFavorite(character: Character): boolean {
    const currentValue = this._favorites$.getValue();
    return currentValue.some(currCharacter => currCharacter.id === character.id);
  }
}
