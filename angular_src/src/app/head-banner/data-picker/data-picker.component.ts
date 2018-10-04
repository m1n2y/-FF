import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})


// It is a data picker component use for booking specified time in home page header
// It is a sub component of head-banner
export class DataPickerComponent implements OnInit {
  today: number = Date.now();
  dayNumber = [0, 1, 2, 3, 4, 5, 6];
  constructor() {
  }

  ngOnInit() {
  }


}
