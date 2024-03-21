import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CharacterListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule,
    InfiniteScrollModule
  ]
})
export class CharactersModule { }
