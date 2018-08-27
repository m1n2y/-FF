import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './data-picker/data-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyDatePickerModule} from 'mydatepicker';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { TableMapComponent } from './table-map/table-map.component';
import { SquareTableComponent } from './tableType/square-table/square-table.component';
import { CircleTableComponent } from './tableType/circle-table/circle-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    HeadBannerComponent,
    TableMapComponent,
    SquareTableComponent,
    CircleTableComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyDatePickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
