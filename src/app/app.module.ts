import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './data-picker/data-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyDatePickerModule} from 'mydatepicker';
import { HeadBannerComponent } from './head-banner/head-banner.component';
import { TableMapComponent } from './table-map/table-map.component';
import { SquareTableComponent } from './tableType/square-table/square-table.component';
import { CircleTableComponent } from './tableType/circle-table/circle-table.component';
import { AlertComponent } from './Login_register/alert/alert.component';
import { HomeComponent } from './Login_register/home/home.component';
import { LoginComponent } from './Login_register/login/login.component';
import { RegisterComponent } from './Login_register/register/register.component';
// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// used to create fake backend
import {fakeBackendProvider} from './Login_register/~helpers/fake-backend';
// login import
import {AuthGuard} from './Login_register/~guards/auth.guard';
import {AlertService} from './Login_register/~services/alert.service';
import {AuthenticationService} from './Login_register/~services/authentication.service';
import {UserService} from './Login_register/~services/user.service';
import {routing} from './app-routing.module';
import { JwtInterceptor} from './Login_register/~helpers/jwt.interceptor';
import {ErrorInterceptor} from './Login_register/~helpers/error.interceptor';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    HeadBannerComponent,
    TableMapComponent,
    SquareTableComponent,
    CircleTableComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    NgbModule




  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
