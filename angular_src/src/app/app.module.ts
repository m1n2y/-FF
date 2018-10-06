import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './head-banner/data-picker/data-picker.component';
import {FormsModule} from '@angular/forms';
// import material css
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyDatePickerModule} from 'mydatepicker';
<<<<<<< HEAD:angular_src/src/app/app.module.ts
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { HeadBannerComponent } from './head-banner/head-banner.component';
=======
>>>>>>> 7fa0be5014e63bf215488eacde75a1018d04a241:src/app/app.module.ts
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
import { HomepageComponent } from './views/homepage/homepage.component';
import { SubmitBookingFormComponent } from './components/submit-booking-form/submit-booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    TableMapComponent,
    SquareTableComponent,
    CircleTableComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    SubmitBookingFormComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    NgbModule,
    FormsModule




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
