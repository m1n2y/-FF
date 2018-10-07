import { Component, OnInit } from '@angular/core';
import {BookinglistService} from '../services/bookinglist.service';

@Component({
  selector: 'app-head-banner',
  templateUrl: './head-banner.component.html',
  styleUrls: ['./head-banner.component.css']
})

// header component in home page

export class HeadBannerComponent implements OnInit {


  constructor(private BookingService:BookinglistService) { }

  ngOnInit() {
  }

  changeSubmit(){
    this.BookingService.submitFormState = false
  }

}
