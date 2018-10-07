import { Component, OnInit } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {TablelistService} from '../../services/tablelist.service';
import {TableList} from '../../models/TableList';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})


// It is a data picker component use for booking specified time in home page header
// It is a sub component of head-banner
export class DataPickerComponent implements OnInit {
  today: number = Date.now();
  dayNumber = [0, 1, 2, 3, 4, 5, 6];
  timeNumber = [11,12,13,14,15,16,17,18,19,20,21];
  datePipe = new DatePipe('en-US');
  clickTime:number=11;
  clickDate: number=Number(this.datePipe.transform((this.today),"yyyMMdd"));
  checkTimeList: number =Number(this.datePipe.transform((this.today),"yyyMMdd")+'11');

  unavailableTable: TableList[] = [];

  constructor(public tableListService: TablelistService) {
  }

  ngOnInit() {
    this.clickDate = this.today;
    this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(
      response =>{if (response['success'] == true){
        this.unavailableTable = response['tables']
        this.tableListService.assignUnavailableList(this.unavailableTable)
        console.log(this.tableListService.unAvailableList)

      } },)

  }

  public chooseDate(index){
    let getDateSelect = document.getElementsByClassName('date-select-container');
    for (let i =0; i<getDateSelect.length;i++){
      getDateSelect[i].children[0].classList.remove('date-click')
      getDateSelect[i].children[2].classList.remove('date-click')
    }
    getDateSelect[index].children[0].classList.add('date-click')
    getDateSelect[index].children[2].classList.add('date-click')


    this.clickDate = Number(this.datePipe.transform((this.today+1000*3600*24*index),"yyyMMdd"));
    this.tableListService.chooseDate = this.clickDate;
    this.checkTimeList = Number(this.clickDate+((document.getElementById('time-select') as HTMLInputElement).value))
    this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(
      response =>{if (response['success'] == true){
        this.unavailableTable = response['tables']
        this.tableListService.assignUnavailableList(this.unavailableTable)
        console.log(this.tableListService.unAvailableList)

      } },
      error =>{console.log(error)}
    )
  }

  public chooseTime(){
    this.clickTime=Number((document.getElementById('time-select') as HTMLInputElement).value);
    this.checkTimeList =  Number(this.clickDate+((document.getElementById('time-select') as HTMLInputElement).value))
    this.tableListService.chooseTime = this.clickTime
    this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(
      response =>{if (response['success'] == true){
        this.unavailableTable = response['tables']
        this.tableListService.assignUnavailableList(this.unavailableTable)
        console.log(this.tableListService.unAvailableList)

      } },
      error =>{console.log(error)}
    )
  }


}
