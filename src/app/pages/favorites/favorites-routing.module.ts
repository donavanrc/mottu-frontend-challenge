import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
