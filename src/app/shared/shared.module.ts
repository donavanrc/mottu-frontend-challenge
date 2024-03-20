import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
    [
      HeaderComponent
    ]
})
export class SharedModule { }
