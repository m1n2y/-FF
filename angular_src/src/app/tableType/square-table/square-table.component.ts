import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-table',
  templateUrl: './square-table.component.html',
  styleUrls: ['./square-table.component.css']
})

// this component is use for demonstrate in home page
// It is a sub component of table-map
export class SquareTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tableNumber: String ;





}
