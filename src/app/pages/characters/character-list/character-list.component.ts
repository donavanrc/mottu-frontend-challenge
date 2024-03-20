import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterFacadeService } from 'src/app/core/facade/character-facade.service';
import { TrackByFacadeService } from 'src/app/core/facade/track-by-facade.service';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  trackById = this.trackByFacade.trackById;

  characters: Character[] = [];

  // Infinite Scroll Settings
  throttle = 300;
  scrollDistance = 2;

  constructor(
    private characterFacade: CharacterFacadeService,
    private trackByFacade: TrackByFacadeService
  ) { }

  private characterSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.characterFacade.reset();

    const obv = this.characterFacade.loadCharacters()
      .subscribe(characters => this.characters = characters);

    this.characterSubscription.add(obv);
  }

  ngOnDestroy(): void {
    this.characterSubscription.unsubscribe();
  }

  handleSearchInput(target: any): void {
    const obv = this.characterFacade.searchCharacter(target?.value)
      .subscribe(characters => {
        this.characters = characters;
        obv.unsubscribe();
      });
  }

  onScrollDown() {
    if (!this.characterFacade.nextUrl) return;

    const obv = this.characterFacade.loadCharacters()
      .subscribe(characters => {
        this.characters = [...this.characters, ...characters];
      });

    this.characterSubscription.add(obv);
  }

  hasCharacters(): boolean {
    return this.characters.length === 0;
  }
}
