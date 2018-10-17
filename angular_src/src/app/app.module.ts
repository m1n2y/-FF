import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './components/head-banner/data-picker/data-picker.component';
import {FormsModule} from '@angular/forms';
// import material css
import {MyDatePickerModule} from 'mydatepicker';

import { TableMapComponent } from './components/table-map/table-map.component';
import { SquareTableComponent } from './components/tableType/square-table/square-table.component';
import { CircleTableComponent } from './components/tableType/circle-table/circle-table.component';
import { AlertComponent } from './views/Login_register/alert/alert.component';
import { LoginComponent } from './views/Login_register/login/login.component';
import { RegisterComponent } from './views/Login_register/register/register.component';
// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// login import
import {AuthGuard} from './views/Login_register/~guards/auth.guard';
import {AlertService} from './views/Login_register/~services/alert.service';
import {AuthenticationService} from './views/Login_register/~services/authentication.service';
import {UserService} from './views/Login_register/~services/user.service';
import {routing} from './app-routing.module';
import { JwtInterceptor} from './views/Login_register/~helpers/jwt.interceptor';
import {ErrorInterceptor} from './views/Login_register/~helpers/error.interceptor';
import { HomepageComponent } from './views/homepage/homepage.component';
import { SubmitBookingFormComponent } from './components/submit-booking-form/submit-booking-form.component';
import {HeadBannerComponent} from './components/head-banner/head-banner.component';
import { BookListPageComponent } from './views/book-list-page/book-list-page.component';
import { ContentBooklistComponent } from './components/content-booklist/content-booklist.component';
import { MenuPageComponent } from './views/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    TableMapComponent,
    SquareTableComponent,
    CircleTableComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    SubmitBookingFormComponent,
    HeadBannerComponent,
    BookListPageComponent,
    ContentBooklistComponent,
    MenuPageComponent,

  ],
  imports: [
    BrowserModule,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
