import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    NoResultsComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:
    [
      HeaderComponent,
      CardComponent,
      NoResultsComponent,
      InputComponent
    ]
})
export class SharedModule { }
