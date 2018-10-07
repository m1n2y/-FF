import { Component, OnInit } from '@angular/core';

import {BookinglistService} from '../../services/bookinglist.service';
import {BookingList} from '../../models/BookingList';
import {DatePipe, formatDate} from '@angular/common';


@Component({
  selector: 'app-content-booklist',
  templateUrl: './content-booklist.component.html',
  styleUrls: ['./content-booklist.component.css']
})
export class ContentBooklistComponent implements OnInit {

  today: number = Date.now();
  datePipe = new DatePipe('en-US');
  currentDate  = Number(this.datePipe.transform((this.today),"yyyMMddhh"));

  public getBookingList=[];
  public historyBookList=[];
  public currentBookList=[];
  constructor(private BookingService: BookinglistService) { }

  ngOnInit( ) {

    let postUserName = {
      "username":"test"
    }

    let postUserWithTime ={
      "username":"test",
      "bookingTime": this.currentDate
    }

    this.BookingService.getBookingByUserName(postUserName).subscribe(
      response =>{
        if(response['success'] == true){
          this.getBookingList = response['booklists'];
        }
      },
      error =>{console.log(error)}
    )

    this.BookingService.getHistoryBookByUserName(postUserWithTime).subscribe(
      response =>{
        if(response['success'] == true){
          this.historyBookList = response['booklists'];
        }
      },
      error =>{console.log(error)}
    )

    this.BookingService.getCurrentListbyUserName(postUserWithTime).subscribe(
      response =>{
        if(response['success'] == true){
          this.currentBookList = response['booklists'];
        }
      },
      error =>{console.log(error)}
    )
  }

  public deleteBooking(postData){
    if(confirm('Are you sure to delete')==true){
      console.log(postData)


    }else{


    }

  }





}
