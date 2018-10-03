import { Component, OnInit } from '@angular/core';
import {IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})


// It is a data picker component use for booking specified time in home page header
// It is a sub component of head-banner
export class DataPickerComponent implements OnInit {
  myDatePickerOptions = {
    dateFormat: 'yyyy-mm-dd',
    width: '180px',
    height: '35px',
    padding: '10px'
  };


  constructor() {
  }

  ngOnInit() {
  }

  onInputFieldChanged(event: IMyDateModel) {
    console.log(event.date);
  }


}
