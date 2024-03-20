import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent implements OnInit {
  @Input() title!: string;
  @Input() message!: string;
  @Input() showHomeButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
