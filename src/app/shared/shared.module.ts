import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    NoResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:
    [
      HeaderComponent,
      CardComponent,
      NoResultsComponent
    ]
})
export class SharedModule { }
