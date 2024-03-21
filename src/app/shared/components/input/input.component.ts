import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() input: EventEmitter<Event> = new EventEmitter<Event>();

  inputValue: string = '';
  isFocused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event): void
  {
    this.input.emit(event);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    if(this.inputValue) return;
    this.isFocused = false;
  }
}
