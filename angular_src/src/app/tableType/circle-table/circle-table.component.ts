import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-table',
  templateUrl: './circle-table.component.html',
  styleUrls: ['./circle-table.component.css']
})

// this component is use for demonstrate in home page
// It is a sub component of table-map
export class CircleTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() tableNumber: String ;

}
