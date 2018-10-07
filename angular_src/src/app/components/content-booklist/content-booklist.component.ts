import { Component, OnInit } from '@angular/core';

import {BookinglistService} from '../../services/bookinglist.service';
import {BookingList} from '../../models/BookingList';

@Component({
  selector: 'app-content-booklist',
  templateUrl: './content-booklist.component.html',
  styleUrls: ['./content-booklist.component.css']
})
export class ContentBooklistComponent implements OnInit {

  public getBookingList=[];
  constructor(private BookingService: BookinglistService) { }

  ngOnInit( ) {

    let postUserName = {
      "username":"test"
    }
    this.BookingService.getBookingByUserName(postUserName).subscribe(
      response =>{
        if(response['success'] == true){
          this.getBookingList = response['booklists'];
        }
      },
      error =>{console.log(error)}
    )
  }





}
