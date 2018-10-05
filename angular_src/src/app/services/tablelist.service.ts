import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {TableList} from '../models/TableList';

@Injectable({
  providedIn: 'root'
})
export class TablelistService {

  constructor(private http: HttpClient) { }
  private serverAPI = 'http://localhost:3000/api'

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

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

}
