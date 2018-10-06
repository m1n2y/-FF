import { Component, OnInit, Input,DoCheck } from '@angular/core';

@Component({
  selector: 'app-circle-table',
  templateUrl: './circle-table.component.html',
  styleUrls: ['./circle-table.component.css']
})

// this component is use for demonstrate in home page
// It is a sub component of table-map
export class CircleTableComponent implements OnInit {
  tableUnavailable :boolean ;

  constructor() { }

  ngOnInit() {
  }

  @Input() tableNumber: String ;
  @Input() unAvailable: [String] ;

  ngDoCheck(){
    this.checkUnavailableTable()

  }


  checkUnavailableTable(){
    this.tableUnavailable = false;
    for(let i =0; i<this.unAvailable.length;i++){
      if (this.tableNumber == this.unAvailable[i]['tableNumber']){
        this.tableUnavailable = true
      }
    }
  }

}
