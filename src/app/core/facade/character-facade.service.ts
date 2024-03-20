import { Injectable } from '@angular/core';
import { CharacterApiService } from '../api/character-api.service';
import { Observable, Subject, catchError, map, of, switchMap } from 'rxjs';
import { Character } from '../models/character.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CharacterFacadeService {
  searchQuery$ = new Subject<string>();

  private _searchQuery: string = '';
  private _nextUrl?: string;

  constructor(private api: CharacterApiService) { }

  reset() {
    this._searchQuery = '';
    this._nextUrl = undefined;
  }

  searchCharacter(characterName: string): Observable<Character[]> {
    this.searchQuery$.next(characterName);

    return this.searchQuery$.pipe(
      switchMap(characterName => {
        this._searchQuery = characterName;
        return this.api.list(this._searchQuery).pipe(
          catchError(this.handleNotFound()),
          map(response => this.extractResultsAndNextUrl(response)));
      }),
    );
  }

  loadCharacters(): Observable<Character[]> {
    return this.api.list(this._searchQuery, this._nextUrl).pipe(
      catchError(this.handleNotFound()),
      map(response => this.extractResultsAndNextUrl(response))
    );
  }

  private extractResultsAndNextUrl(response: any): Character[] {
    this._nextUrl = response.info.next;
    return response.results;
  }

  private handleNotFound(): (error: HttpErrorResponse) => Observable<any> {
    return (error: HttpErrorResponse) => {
      if (error.status === 404) {
        return of({ results: [], info: {} });
      }
      throw error;
    }
  }

  get nextUrl(): string | undefined {
    return this._nextUrl;
  }
}
