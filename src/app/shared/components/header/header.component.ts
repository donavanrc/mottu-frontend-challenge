import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoritesFacadeService } from 'src/app/core/facade/favorites-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favoriteCount$: Observable<number>;

  constructor(
    public router: Router,
    private favoritesFacade: FavoritesFacadeService
  ) {
    this.favoriteCount$ = this.favoritesFacade.getFavoriteCount();
  }

  ngOnInit(): void {

  }

}
