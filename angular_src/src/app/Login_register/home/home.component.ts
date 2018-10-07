import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/internal/operators';

import {User} from '../~models/user';
// import {UserService} from '../~services/user.service';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(name) {
    // this.userService.delete(id).pipe(first()).subscribe(() => {
    //     this.loadAllUsers();
    // });
    this.userService.delete(name).subscribe(
      response => {
        if (response['success'] == true){
          this.loadAllUsers();
        }
      },error => {
        console.log(error)
      }
    );
  }

  private loadAllUsers() {
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //     this.users = users;
    // });
    this.userService.getAllUser().subscribe(
      response => {
        if (response['success'] == true){
          this.users = response['users']
        }
      },error => {
        console.log(error)
      }
    );
  }

}
