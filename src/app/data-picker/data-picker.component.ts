import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {
  myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            width: '20%'
                          };
  constructor() { }

  ngOnInit() {
  }

  onDateChanged(event) {
      console.log(event.value);
  }

}
