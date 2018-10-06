import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {DatePipe, formatDate} from '@angular/common';

import {TablelistService} from '../../services/tablelist.service';

@Component({
  selector: 'app-submit-booking-form',
  templateUrl: './submit-booking-form.component.html',
  styleUrls: ['./submit-booking-form.component.css']
})
export class SubmitBookingFormComponent implements OnInit {
  today: number = Date.now();
  datePipe = new DatePipe('en-US');
  dayNumber = [0, 1, 2, 3, 4, 5, 6];
  timeNumber = [11,12,13,14,15,16,17,18,19,20,21];
  peopleNumber = [1, 2, 3, 4, 5, 6,7,8];
  availableTable = []

  choosePeopleNumber:number =1;


  userInfoChange:boolean = true
  userInfoChangeButtonText ='Edit'

  model:String;
  chooseTable:String;


  Username={
    name: 'aba',
    phone: '123123'
  }

  constructor(private TableService:TablelistService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    if (this.model != String(this.TableService.chooseDate)){
      this.model = String(this.TableService.chooseDate);
    }
    this.availableTable = []
    for(let i =0; i<this.TableService.availableTableList.length;i++) {
      this.availableTable.push(this.TableService.availableTableList[i]['tableNumber'])
    }


  }

  editUserInfo(){
    this.userInfoChange = this.userInfoChange==true? false: true;
    this.userInfoChangeButtonText = this.userInfoChangeButtonText=='Edit'? 'Confirm':'Edit'
  }

  chooseDate(index){
    this.TableService.chooseDate = Number(this.datePipe.transform((this.today+1000*3600*24*index),"yyyMMdd"));
    this.checkAvailableTable();
  }

  chooseTime(){

    this.TableService.chooseTime =Number((document.getElementById('submit-time-select') as HTMLInputElement).value);
    this.checkAvailableTable();
  }
  choosePeople(){
    this.choosePeopleNumber = Number((document.getElementById('people-select') as HTMLInputElement).value);
    this.checkAvailableTable();
  }

  submitBooking(){
    if (this.chooseTable ==null){
      alert("you need to select a table")
    }
    // console.log((this.TableService.chooseTime))
    // console.log((this.TableService.chooseDate))
    // console.log((this.choosePeopleNumber))
    
    let bookingInfo = {
      "tableNumber": this.chooseTable,
      "booktimeList": Number(String(this.TableService.chooseDate)+String(this.TableService.chooseTime)),
    }
    console.log(bookingInfo)


  }

  checkAvailableTable(){
    let postData ={
      "booktimeList": Number(String(this.TableService.chooseDate)+String(this.TableService.chooseTime)),
      "tableType": this.choosePeopleNumber>4?"big":"small",
    }
    // console.log(postData)
    this.TableService.getAvailableTable(postData).subscribe(
      response=>{if (response['success'] == true){
        this.TableService.availableTableList = response['tables']}
        // console.log(this.TableService.availableTableList)
      },
      error=>{console.log(error)}
    )
  }


}
