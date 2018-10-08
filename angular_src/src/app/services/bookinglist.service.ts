import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {BookingList} from '../models/BookingList';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookinglistService {

  private serverAPI = '/api'

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

  public getHistoryBookByUserName(postData){
    let URI = `${this.serverAPI}/booklist/getHistoryListbyUserName`;
    let body = postData
    return this.http.post(URI,body,{headers : this.headers})
  }
  public getCurrentListbyUserName(postData){
    let URI = `${this.serverAPI}/booklist/getCurrentListbyUserName`;
    let body = postData
    return this.http.post(URI,body,{headers : this.headers})
  }



  public addNewBooking(newBooking:BookingList){
    let URI = `${this.serverAPI}/booklist/addNewBooking`;
    let body = newBooking;
    return this.http.post(URI,body,{headers : this.headers})
  }

  public deleteBooking(postData){
    let URI = `${this.serverAPI}/booklist/deleteBookList`;
    let body = postData;
    return this.http.post(URI,body,{headers : this.headers})
  }


}
