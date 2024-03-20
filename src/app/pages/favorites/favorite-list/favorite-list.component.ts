import { Component, OnInit } from '@angular/core';
import { FavoritesFacadeService } from 'src/app/core/facade/favorites-facade.service';
import { TrackByFacadeService } from 'src/app/core/facade/track-by-facade.service';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  trackById = this.trackByFacade.trackById;

  favorites: Character[] = [];

  constructor(
    private favoriteFacade: FavoritesFacadeService,
    private trackByFacade: TrackByFacadeService
  ) { }

  ngOnInit(): void {
    this.favoriteFacade.favorites$.subscribe(favorites => this.favorites = favorites);
  }

  hasFavorites(): boolean {
    return this.favorites.length === 0;
  }
}
