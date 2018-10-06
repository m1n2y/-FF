import { Component, OnInit, Input,DoCheck } from '@angular/core';

@Component({
  selector: 'app-square-table',
  templateUrl: './square-table.component.html',
  styleUrls: ['./square-table.component.css']
})

// this component is use for demonstrate in home page
// It is a sub component of table-map
export class SquareTableComponent implements OnInit {
  tableUnavailable :boolean ;

  constructor() { }

  ngOnInit() {
  }

  @Input() tableNumber: String ;
  @Input() unAvailable: [String] ;

  onclick(){
    console.log('a')

  }

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
