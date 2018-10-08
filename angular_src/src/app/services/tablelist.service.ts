import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {TableList} from '../models/TableList';
import {DatePipe, formatDate} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TablelistService {

  private serverAPI = '/api'
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  datePipe = new DatePipe('en-US');
  public unAvailableList:TableList[] = []
  public availableTableList: TableList[] =[]
  public chooseTime:number = 11;
  public chooseDate:number =Number(this.datePipe.transform((Date.now()),"yyyMMdd"));

  constructor(private http: HttpClient) {  }

  public assignUnavailableList(tableList:TableList[]){
    this.unAvailableList = tableList
  }



  public getAllTables(){
    let URI = `${this.serverAPI}/tablelist`;
    return this.http.get(URI)
  }



  public getAllSmallTables(){
    let URI = `${this.serverAPI}/tablelist/getsmalltables`;
    return this.http.get(URI)
  }

  public getAllBigTables(){
    let URI = `${this.serverAPI}/tablelist/getbigtables`;
    return this.http.get(URI)
  }


  public getUnavailableTables(bookTime:number){
    let URI = `${this.serverAPI}/tablelist/getTableByBooktimeList`;
    let body = JSON.stringify({
      "booktimeList": bookTime
    })

    return this.http.post(URI,body,{headers : this.headers})
  }

  public getAvailableTable(postData){
    let URI = `${this.serverAPI}/tablelist/getTableByBooktimeAndType`;
    let body = JSON.stringify({
      "booktimeList": postData.booktimeList,
      "tableType": postData.tableType,
    })
    return this.http.post(URI,body,{headers : this.headers})

  }

  public updateBookTimeForTable(postData){
    let URI = `${this.serverAPI}/tablelist/updateBooktime`;
    let body = JSON.stringify({
      "tableNumber": postData.tableNumber,
      "booktimeList": postData.bookingTime,
    })
    return this.http.post(URI,body,{headers : this.headers})
  }

  public deleteBookTimeForTable(postData){
    let URI = `${this.serverAPI}/tablelist/deleteBooktime`;
    let body = JSON.stringify({
      "tableNumber": postData.tableNumber,
      "booktimeList": postData.bookingTime,
    })
    return this.http.post(URI,body,{headers : this.headers})
  }

}
