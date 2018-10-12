import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../models/User';
import {DatePipe, formatDate} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private serverAPI = 'http://localhost:3000/api'
  private serverAPI = '/api'
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  datePipe = new DatePipe('en-US');


  constructor(private http: HttpClient) {  }


  public validateUser (postData){
    let URI = `${this.serverAPI}/authenticate/`;
    let body = JSON.stringify({
      "username": postData.username,
      "password": postData.password,
    })
    return this.http.post(URI,body,{headers : this.headers})
  }



  public getAllUser(){
    let URI = `${this.serverAPI}/user`;
    return this.http.get(URI)
  }


  public register(postData){
    let URI = `${this.serverAPI}/user/`;
    let body = JSON.stringify({
      "username": postData.username,
      "password": postData.password,
      "firstName": postData.firstName,
      "lastName": postData.lastName,
      "phoneNumber": postData.phoneNumber,

    })
    return this.http.post(URI,body,{headers : this.headers})
  }

}
