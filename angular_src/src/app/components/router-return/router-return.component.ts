import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-router-return',
  templateUrl: './router-return.component.html',
  styleUrls: ['./router-return.component.css']
})
export class RouterReturnComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/BookList'], { replaceUrl: true });

  }

}
