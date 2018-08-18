import { Component, OnInit } from '@angular/core';
import {IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})

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
