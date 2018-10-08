import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {NgZone} from '@angular/core';
import {BookinglistService} from '../../services/bookinglist.service';
import {TablelistService} from '../../services/tablelist.service';
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
  constructor(private BookingService: BookinglistService,
              private TableService:TablelistService,
              private router:Router,
              private zone: NgZone) { }

  getUserInfo = JSON.parse(localStorage.getItem('currentUser'))

  ngOnInit( ) {
    let postUserName = {
      "username": this.getUserInfo.username
    }

    let postUserWithTime ={
      "username": this.getUserInfo.username,
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

  ngDoCheck(){

  }

  public deleteBooking(postData){
    if(confirm('Are you sure to delete ?')==true){

      let deleteBook = {
        username:postData.username,
        bookingTime:postData.bookingTime,
        tableNumber:postData.tableNumber
      }

      let deletedTimeListofTable ={
        bookingTime:postData.bookingTime,
        tableNumber:postData.tableNumber
      }
      this.BookingService.deleteBooking(deleteBook).subscribe(
        response=>{
          if(response['success']==true){
            console.log(response)
          }
        },
        error=>{console.log(error)}
      )


      this.TableService.deleteBookTimeForTable(deletedTimeListofTable).subscribe(
        response=>{
          if(response['success']==true){
            console.log(response)
            this.router.navigate(['/Return'], { replaceUrl: true });

          }
        },
        error=>{console.log(error)}
      )

    }else{


    }

  }





}
