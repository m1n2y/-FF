import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {BookingList} from '../models/BookingList';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookinglistService {

  private serverAPI = 'http://localhost:3000/api'
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  datePipe = new DatePipe('en-US');
  public submitFormState = true;

  constructor(private http: HttpClient) { }

  public getAllBooking (){
    let URI = `${this.serverAPI}/booklist`;
    return this.http.get(URI)
  }

  public getBookingByUserName(postData){
    let URI = `${this.serverAPI}/booklist/getBookingListByUserName`;
    let body = JSON.stringify({
      "username": postData.username,
    })
    return this.http.post(URI,body,{headers : this.headers})
  }


  public addNewBooking(newBooking:BookingList){
    let URI = `${this.serverAPI}/booklist/addNewBooking`;
    let body = newBooking;
    return this.http.post(URI,body,{headers : this.headers})
  }


}
