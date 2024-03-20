import { Component, Input, OnInit } from '@angular/core';
import { FavoritesFacadeService } from 'src/app/core/facade/favorites-facade.service';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() character!: Character;

  constructor(
    private favoriteFacade: FavoritesFacadeService
  ) { }

  ngOnInit(): void {
  }

  toggleFavorite(character: Character) {
    if (!this.isFavorite(character)) {
      this.favoriteFacade.addFavorite(character);
    } else {
      this.favoriteFacade.removeFavorite(character);
    }
  }

  isFavorite(character: Character): boolean {
    return this.favoriteFacade.containsFavorite(character);
  }
}
