import { Component, OnInit } from '@angular/core';
import {TablelistService} from '../services/tablelist.service';

import {TableList} from '../models/TableList';


@Component({
  selector: 'app-table-map',
  templateUrl: './table-map.component.html',
  styleUrls: ['./table-map.component.css']
})

// this component is use for demonstrate table map of restaurant in home page


export class TableMapComponent implements OnInit {

  constructor(private tableService: TablelistService) { }
  public allSmallTables =[];
  public allBigTables = [];


  ngOnInit() {
    //get all small tables
    this.tableService.getAllSmallTables().subscribe(
      response => {
        if (response['success'] == true){
          this.allSmallTables = response['tables']
          // console.log(this.allSmallTables)
        }
      },
      error => {
        console.log(error)
      }
    )

    //get all big tables
    this.tableService.getAllBigTables().subscribe(
      response => {
        if (response['success'] == true){
          this.allBigTables = response['tables']
          // console.log(this.allBigTables)
        }
      },
      error => {
        console.log(error)
      }
    )


  }

}
