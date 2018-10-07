import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {DatePipe, formatDate} from '@angular/common';

import {TablelistService} from '../../services/tablelist.service';
import {BookinglistService} from '../../services/bookinglist.service';
import {BookingList} from '../../models/BookingList';


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

  model:string;
  chooseTable:string;


  Username={
    username: 'aba',
    phoneNumber: '123123'
  }

  constructor(private TableService:TablelistService,
              private BookListService: BookinglistService) { }

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
    let bookingInfo:BookingList = {
      username: this.Username.username,
      customer: this.Username.phoneNumber,
      bookingTime: Number(String(this.TableService.chooseDate)+String(this.TableService.chooseTime)),
      phoneNumber: '123123',
      peopleNumber:this.choosePeopleNumber,
      tableNumber:this.chooseTable,
      message:(document.getElementById('submit_message') as HTMLInputElement).value
    }

    let timeForTable = {
      bookingTime: Number(String(this.TableService.chooseDate)+String(this.TableService.chooseTime)),
      tableNumber:this.chooseTable
    }

    this.BookListService.addNewBooking(bookingInfo).subscribe(
      response=>{if (response['success'] == true){
        console.log(timeForTable)
        this.TableService.updateBookTimeForTable(timeForTable).subscribe(
          response =>{ console.log(response)},
          error=>{ console.log(error)}
        )

      }},
      error=>{console.log(error)}
    )
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

  closeSubmit(){
    this.BookListService.submitFormState = true;
  }


}
