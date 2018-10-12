import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService,} from '../~services/alert.service';
import {AuthenticationService} from '../~services/authentication.service';
import {UserService} from '../../services/user.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userAu: UserService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/HomePage';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    // .pipe(first())
    // .subscribe(
    //   data => {
    //     this.router.navigate([this.returnUrl]);
    //   },
    //   error => {
    //     this.alertService.error(error);
    //     this.loading = false;
    //   });
    // console.debug("dd")
    let postDate={
      username: this.f.username.value,
      password: this.f.password.value,

    }
   this.userAu.validateUser(postDate).subscribe(
      response => {
        this.loading = false;
        if (response['success'] == true){
            // console.debug(response['users'][i]);

                 localStorage.setItem('currentUser',JSON.stringify(response['userInfo']));

                 this.router.navigate([this.returnUrl]);


        }else{
          return throwError({ error: { message: 'Username or password is incorrect' } });
        }
      },
      error => {
        console.log(error)
      }
    );
  }

}
