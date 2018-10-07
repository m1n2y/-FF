(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Login_register/alert/alert.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Login_register/alert/alert.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Login_register/alert/alert.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Login_register/alert/alert.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" *ngIf=\"message\" ngClass=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n      {{message.text}}\n</div>\n"

/***/ }),

/***/ "./src/app/Login_register/alert/alert.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Login_register/alert/alert.component.ts ***!
  \*********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent.prototype.OnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/Login_register/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/Login_register/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/Login_register/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/Login_register/home/home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Login_register/home/home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Login_register/home/home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You're logged in with Angular 6!!</p>\n<h3>All registered users:</h3>\n<ul>\n  <li *ngFor=\"let user of users\">\n    {{user.username}} ({{user.firstName}} {{user.lastName}})\n    - <a (click)=\"deleteUser(user.username)\" class=\"text-danger\">Delete</a>\n  </li>\n</ul>\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\n"

/***/ }),

/***/ "./src/app/Login_register/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Login_register/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {UserService} from '../~services/user.service';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (name) {
        var _this = this;
        // this.userService.delete(id).pipe(first()).subscribe(() => {
        //     this.loadAllUsers();
        // });
        this.userService.delete(name).subscribe(function (response) {
            if (response['success'] == true) {
                _this.loadAllUsers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.users = users;
        // });
        this.userService.getAllUser().subscribe(function (response) {
            if (response['success'] == true) {
                _this.users = response['users'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Login_register/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Login_register/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Login_register/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Login_register/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Login_register/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Login_register/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <h2 class=\"text-center\">Login</h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Login_register/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Login_register/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../~services/authentication.service */ "./src/app/Login_register/~services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, userAu, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userAu = userAu;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/HomePage';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
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
        console.debug("dd");
        this.userAu.getAllUser().subscribe(function (response) {
            _this.loading = false;
            if (response['success'] == true) {
                var goto = false;
                for (var i = 0; i < response['users'].length; i++) {
                    // console.debug(response['users'][i]);
                    if (response['users'][i].username == _this.f.username.value && response['users'][i].password == _this.f.password.value) {
                        goto = true;
                        localStorage.setItem('currentUser', JSON.stringify(response['users'][i]));
                        _this.router.navigate([_this.returnUrl]);
                    }
                }
                console.debug("goto" + goto);
                if (goto == false) {
                    _this.alertService.error('Username or password is incorrect');
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])({ error: { message: 'Username or password is incorrect' } });
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Login_register/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Login_register/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Login_register/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Login_register/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Login_register/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Login_register/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <h2 class=\"text-center\">Register</h2>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n              <div class=\"form-group\">\n              <label for=\"phoneNumber\">phoneNumber</label>\n              <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n              <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.username.errors.required\">Username is required</div>\n              </div>\n          </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Login_register/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Login_register/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {UserService} from '../~services/user.service';

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, 
    // private userService: UserService,
    userAu, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userAu = userAu;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        // this.userService.register(this.registerForm.value)
        //   .pipe(first())
        //   .subscribe(
        //     data => {
        //       this.alertService.success('Registration successful', true);
        //       this.router.navigate(['/login']);
        //     },
        //     error => {
        //       this.alertService.error(error);
        //       this.loading = false;
        //     });
        this.userAu.register(this.registerForm.value).subscribe(function (response) {
            _this.loading = false;
            if (response['success'] == true) {
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Login_register/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/Login_register/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Login_register/~guards/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/Login_register/~guards/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*The auth guard is used to prevent unauthenticated users from accessing restricted routes*/
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Login_register/~helpers/error.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/Login_register/~helpers/error.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../~services/authentication.service */ "./src/app/Login_register/~services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*The Error Interceptor intercepts http responses from the api to check if there were any errors.*/




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/Login_register/~helpers/fake-backend.ts":
/*!*********************************************************!*\
  !*** ./src/app/Login_register/~helpers/fake-backend.ts ***!
  \*********************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var userAu;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
                // console.log("UserService")
                // userAu.getAllUser().subscribe(
                //   response => {
                //
                //     if (response['success'] == true) {
                //
                //       console.debug(response['users']);
                //       let filteredUsers = response['users'].filter(user => {
                //         return user.username === request.body.username && user.password === request.body.password;
                //       });
                //       if (filteredUsers.length) {
                //         // if login details are valid return 200 OK with user details and fake jwt token
                //         let user = filteredUsers[0];
                //         let body = {
                //           id: user.id,
                //           username: user.username,
                //           firstName: user.firstName,
                //           lastName: user.lastName,
                //           token: 'fake-jwt-token'
                //         };
                //
                //         return of(new HttpResponse({ status: 200, body: body }));
                //       } else {
                //         // else return 400 bad request
                //         return throwError({ error: { message: 'Username or password is incorrect' } });
                //       }
                //     }
                //   }, error => {
                //     console.log("error")
                //          console.log(error)
                //        }
                //
                // );
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/Login_register/~helpers/jwt.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/Login_register/~helpers/jwt.interceptor.ts ***!
  \************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/Login_register/~services/alert.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Login_register/~services/alert.service.ts ***!
  \***********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*The alert service enables any component in the application to display alert messages at the top of the page via the alert component.*/
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/Login_register/~services/authentication.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/Login_register/~services/authentication.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.serverAPI = 'http://localhost:3000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
    }
    AuthenticationService.prototype.getAllUsers = function () {
        var URI = this.serverAPI + "/user";
        return this.http.get(URI);
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Login_register/~services/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Login_register/~services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login_register/home/home.component */ "./src/app/Login_register/home/home.component.ts");
/* harmony import */ var _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login_register/login/login.component */ "./src/app/Login_register/login/login.component.ts");
/* harmony import */ var _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login_register/register/register.component */ "./src/app/Login_register/register/register.component.ts");
/* harmony import */ var _Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login_register/~guards/auth.guard */ "./src/app/Login_register/~guards/auth.guard.ts");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");






var appRoutes = [
    { path: 'HomePage', component: _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'usermanagement', component: _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '', component: _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  box-sizing: border-box;\n  margin: 0px;\n  max-width: 2500px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n\n    <div class=\"container\">\n\n      <div class=\"col \">\n        <app-alert></app-alert>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Booking-System';
    }
    AppComponent.prototype.clickBooking = function () {
        window.location.href = '/login';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _head_banner_data_picker_data_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./head-banner/data-picker/data-picker.component */ "./src/app/head-banner/data-picker/data-picker.component.ts");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _table_map_table_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-map/table-map.component */ "./src/app/table-map/table-map.component.ts");
/* harmony import */ var _tableType_square_table_square_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tableType/square-table/square-table.component */ "./src/app/tableType/square-table/square-table.component.ts");
/* harmony import */ var _tableType_circle_table_circle_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tableType/circle-table/circle-table.component */ "./src/app/tableType/circle-table/circle-table.component.ts");
/* harmony import */ var _Login_register_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Login_register/alert/alert.component */ "./src/app/Login_register/alert/alert.component.ts");
/* harmony import */ var _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login_register/home/home.component */ "./src/app/Login_register/home/home.component.ts");
/* harmony import */ var _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login_register/login/login.component */ "./src/app/Login_register/login/login.component.ts");
/* harmony import */ var _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Login_register/register/register.component */ "./src/app/Login_register/register/register.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _Login_register_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Login_register/~helpers/fake-backend */ "./src/app/Login_register/~helpers/fake-backend.ts");
/* harmony import */ var _Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Login_register/~guards/auth.guard */ "./src/app/Login_register/~guards/auth.guard.ts");
/* harmony import */ var _Login_register_services_alert_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Login_register/~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _Login_register_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Login_register/~services/authentication.service */ "./src/app/Login_register/~services/authentication.service.ts");
/* harmony import */ var _Login_register_services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login_register/~services/user.service */ "./src/app/Login_register/~services/user.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Login_register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Login_register/~helpers/jwt.interceptor */ "./src/app/Login_register/~helpers/jwt.interceptor.ts");
/* harmony import */ var _Login_register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Login_register/~helpers/error.interceptor */ "./src/app/Login_register/~helpers/error.interceptor.ts");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");
/* harmony import */ var _components_submit_booking_form_submit_booking_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/submit-booking-form/submit-booking-form.component */ "./src/app/components/submit-booking-form/submit-booking-form.component.ts");
/* harmony import */ var _head_banner_head_banner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./head-banner/head-banner.component */ "./src/app/head-banner/head-banner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// bootstrap

// used to create fake backend

// login import










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _head_banner_data_picker_data_picker_component__WEBPACK_IMPORTED_MODULE_5__["DataPickerComponent"],
                _table_map_table_map_component__WEBPACK_IMPORTED_MODULE_7__["TableMapComponent"],
                _tableType_square_table_square_table_component__WEBPACK_IMPORTED_MODULE_8__["SquareTableComponent"],
                _tableType_circle_table_circle_table_component__WEBPACK_IMPORTED_MODULE_9__["CircleTableComponent"],
                _Login_register_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__["HomepageComponent"],
                _components_submit_booking_form_submit_booking_form_component__WEBPACK_IMPORTED_MODULE_24__["SubmitBookingFormComponent"],
                _head_banner_head_banner_component__WEBPACK_IMPORTED_MODULE_25__["HeadBannerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_6__["MyDatePickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["routing"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _Login_register_services_alert_service__WEBPACK_IMPORTED_MODULE_17__["AlertService"],
                _Login_register_services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
                _Login_register_services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _Login_register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _Login_register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _Login_register_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_15__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/submit-booking-form/submit-booking-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/submit-booking-form/submit-booking-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit_container{\n  border: solid 2px lightslategray ;\n}\n\n.submit_top{\n  height: 50px;\n  background-color: #d96673;\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n}\n\n.submit_top button{\n  background-color: #d96673;\n  border: none;\n  color: white;\n  cursor: pointer;\n  height: 50px;\n  width: 80px;\n}\n\n.submit_top button:hover{\n  color: darkblue;\n}\n\n.submit_content{\n  height: 550px;\n  background-color: white;\n\n}\n\n.submit_content .submit_content_title{\n  height: 30px;\n  padding-left: 10px;\n  background-color: rgb(227, 227, 227);\n}\n\n.submit_content .submit_content_userinfo{\n  position: relative;\n  height: 100px;\n\n}\n\n.submit_content_userinfo_icon{\n  position: absolute;\n  width: 100px;\n  horiz-align: center;\n  vertical-align: center;\n  left: 30px;\n}\n\n.submit_content_userinfo_icon div{\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  margin-top: 15px;\n  border: solid 1px black;\n  background-color: #d2644f;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 30px;\n  color: white;\n  line-height: 65px;\n  font-weight: bold;\n}\n\n.submit_content_userinfo_Info{\n  height: 100px;\n  position: absolute;\n  left: 130px;\n  padding: 20px 0;\n}\n\n.submit_content_userinfo_Info_Username{\n  font-size: 25px;\n}\n\n.submit_content_userinfo_button{\n  height: 100px;\n  position: absolute;\n  right: 50px;\n  cursor: pointer;\n}\n\n.submit_content_userinfo_button span{\n\n  border: none;\n  background-color: white;\n  color: dodgerblue;\n  text-align: center;\n  font-size: 20px;\n  cursor: pointer;\n  line-height: 90px;\n}\n\n.submit_content .submit_content_bookinginfo{\n  height: 200px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.submit_content .submit_content_bookinginfo li{\n  list-style: none;\n  height: 50px;\n  width: 100%;\n  align-items:center;\n  padding-left: 80px;\n}\n\n.submit_content_bookinginfo .submit_time{\n  display: inline-block;\n  padding-right: 20px;\n}\n\n.submit_content .submit_content_message{\n  height: 100px;\n}\n\n.btn-primary{\n  background-color: #666666;\n  border: none;\n}\n\n.submit-table label{\n  padding: .375rem .35rem\n}\n\n.submit_form_State{\n  display: none;\n}\n\n#submit_message{\n  width: 100%;\n  height: 175px;\n}\n"

/***/ }),

/***/ "./src/app/components/submit-booking-form/submit-booking-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/submit-booking-form/submit-booking-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"submit_container\" >\n  <div class=\"submit_top\">\n\n    <button class=\"submit_top_close\" (click)=\"closeSubmit()\">Close</button>\n    <button class=\"submit_top_Submit\" (click)=\"submitBooking()\">Submit</button>\n\n  </div>\n\n  <div class=\"submit_content\">\n    <div class=\"submit_content_userinfo\">\n      <div class=\"submit_content_userinfo_icon\">\n        <div>TS</div>\n      </div>\n      <div class=\"submit_content_userinfo_Info\">\n          <div>\n            <span *ngIf=\"userInfoChange\" class=\"submit_content_userinfo_Info_Username\">{{Username.name}}</span>\n            <input type=\"text\" [(ngModel)]=\"Username.name\" *ngIf=\"!userInfoChange\"><br>\n            <span *ngIf=\"userInfoChange\">{{Username.phone}}</span>\n            <input type=\"text\"  [(ngModel)]=\"Username.phone\"  *ngIf=\"!userInfoChange\">\n          </div>\n      </div>\n      <div class=\"submit_content_userinfo_button\" (click)=\"editUserInfo()\">\n        <span >{{userInfoChangeButtonText}}</span>\n      </div>\n\n\n    </div>\n    <div class=\"submit_content_title\">  Booking Info</div>\n\n    <ul class=\"submit_content_bookinginfo\">\n      <li class=\"submit_date btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\n        <label ngbButtonLabel class=\"btn-primary\" *ngFor=\"let i of dayNumber\"  >\n          <input ngbButton type=\"radio\" [value]=\"today+(1000*3600*24*i)|date:'yyyMMdd'\" value=\"today+(1000*3600*24*i)|date:'yyyMMdd'\" (click)=\"chooseDate(i)\"> {{today+(1000*3600*24*i)|date:'E'}}\n        </label>\n      </li>\n      <li>\n        <div class=\"submit_time\">\n          <label >Time: </label>\n          <select name=\"time-select\" class=\"submit-time-select\" id=\"submit-time-select\"  (change)=\"chooseTime()\" >\n            <option *ngFor=\"let time of timeNumber\"  value={{time}} >{{time+': 00'}}--{{time+1+': 00'}}</option>\n          </select>\n        </div>\n\n        <div class=\"submit_time\">\n          <label >PeopleNum: </label>\n          <select name=\"time-select\" class=\"people-number\" id=\"people-select\"  (change)=\"choosePeople()\" >\n            <option *ngFor=\"let number of peopleNumber\"  value={{number}}>{{number}}</option>\n          </select>\n        </div>\n      </li>\n\n      <li>\n        <label >Table: </label>\n        <div class=\"submit-table btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"chooseTable\">\n          <label ngbButtonLabel class=\"btn-primary\" *ngFor=\"let tableNumber of availableTable\"  >\n            <input ngbButton type=\"radio\" [value]=\"tableNumber\"> {{tableNumber}}\n          </label>\n        </div>\n\n      </li>\n\n\n\n\n    </ul>\n\n    <div class=\"submit_content_title\">  Message</div>\n\n    <div class=\"submit_content_message\">\n      <textarea id=\"submit_message\"></textarea>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/submit-booking-form/submit-booking-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/submit-booking-form/submit-booking-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SubmitBookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitBookingFormComponent", function() { return SubmitBookingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_tablelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tablelist.service */ "./src/app/services/tablelist.service.ts");
/* harmony import */ var _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bookinglist.service */ "./src/app/services/bookinglist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitBookingFormComponent = /** @class */ (function () {
    function SubmitBookingFormComponent(TableService, BookListService) {
        this.TableService = TableService;
        this.BookListService = BookListService;
        this.today = Date.now();
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
        this.dayNumber = [0, 1, 2, 3, 4, 5, 6];
        this.timeNumber = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        this.peopleNumber = [1, 2, 3, 4, 5, 6, 7, 8];
        this.availableTable = [];
        this.choosePeopleNumber = 1;
        this.userInfoChange = true;
        this.userInfoChangeButtonText = 'Edit';
        this.Username = {
            name: 'aba',
            phone: '123123'
        };
    }
    SubmitBookingFormComponent.prototype.ngOnInit = function () {
    };
    SubmitBookingFormComponent.prototype.ngDoCheck = function () {
        if (this.model != String(this.TableService.chooseDate)) {
            this.model = String(this.TableService.chooseDate);
        }
        this.availableTable = [];
        for (var i = 0; i < this.TableService.availableTableList.length; i++) {
            this.availableTable.push(this.TableService.availableTableList[i]['tableNumber']);
        }
    };
    SubmitBookingFormComponent.prototype.editUserInfo = function () {
        this.userInfoChange = this.userInfoChange == true ? false : true;
        this.userInfoChangeButtonText = this.userInfoChangeButtonText == 'Edit' ? 'Confirm' : 'Edit';
    };
    SubmitBookingFormComponent.prototype.chooseDate = function (index) {
        this.TableService.chooseDate = Number(this.datePipe.transform((this.today + 1000 * 3600 * 24 * index), "yyyMMdd"));
        this.checkAvailableTable();
    };
    SubmitBookingFormComponent.prototype.chooseTime = function () {
        this.TableService.chooseTime = Number(document.getElementById('submit-time-select').value);
        this.checkAvailableTable();
    };
    SubmitBookingFormComponent.prototype.choosePeople = function () {
        this.choosePeopleNumber = Number(document.getElementById('people-select').value);
        this.checkAvailableTable();
    };
    SubmitBookingFormComponent.prototype.submitBooking = function () {
        var _this = this;
        if (this.chooseTable == null) {
            alert("you need to select a table");
        }
        var bookingInfo = {
            username: 'test',
            bookingTime: Number(String(this.TableService.chooseDate) + String(this.TableService.chooseTime)),
            phoneNumber: '123123',
            peopleNumber: this.choosePeopleNumber,
            tableNumber: this.chooseTable,
            message: document.getElementById('submit_message').value
        };
        var timeForTable = {
            bookingTime: Number(String(this.TableService.chooseDate) + String(this.TableService.chooseTime)),
            tableNumber: this.chooseTable
        };
        this.BookListService.addNewBooking(bookingInfo).subscribe(function (response) {
            if (response['success'] == true) {
                console.log(timeForTable);
                _this.TableService.updateBookTimeForTable(timeForTable).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
            }
        }, function (error) { console.log(error); });
    };
    SubmitBookingFormComponent.prototype.checkAvailableTable = function () {
        var _this = this;
        var postData = {
            "booktimeList": Number(String(this.TableService.chooseDate) + String(this.TableService.chooseTime)),
            "tableType": this.choosePeopleNumber > 4 ? "big" : "small",
        };
        // console.log(postData)
        this.TableService.getAvailableTable(postData).subscribe(function (response) {
            if (response['success'] == true) {
                _this.TableService.availableTableList = response['tables'];
            }
            // console.log(this.TableService.availableTableList)
        }, function (error) { console.log(error); });
    };
    SubmitBookingFormComponent.prototype.closeSubmit = function () {
        this.BookListService.submitFormState = true;
    };
    SubmitBookingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-booking-form',
            template: __webpack_require__(/*! ./submit-booking-form.component.html */ "./src/app/components/submit-booking-form/submit-booking-form.component.html"),
            styles: [__webpack_require__(/*! ./submit-booking-form.component.css */ "./src/app/components/submit-booking-form/submit-booking-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tablelist_service__WEBPACK_IMPORTED_MODULE_2__["TablelistService"],
            _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_3__["BookinglistService"]])
    ], SubmitBookingFormComponent);
    return SubmitBookingFormComponent;
}());



/***/ }),

/***/ "./src/app/head-banner/data-picker/data-picker.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/head-banner/data-picker/data-picker.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-container{\n  display: flex;\n\n}\n\n/*css for date picker*/\n\n.date-select-container{\n  text-align: center;\n  line-height: 18px;\n  background-color: #252b30;\n  padding: 0;\n  cursor: pointer;\n  padding: 0 20px;\n}\n\n.date-select-container:hover span{\n  color:  rgba(31, 249, 14, 0.79);\n}\n\n.date-container-month{\n  font-size: 10px;\n  color: white;\n}\n\n.date-container-day{\n  font-size: 14px;\n  color: white;\n}\n\n.date-click{\n  color: rgba(31, 249, 14, 0.79);\n}\n\n/*css for time picker*/\n\n.time-select-container{\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n\n.time-select-container .time-select{\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-color: #252b30;\n  border: none;\n  color: rgba(31, 249, 14, 0.79);\n  font-size: 16px;\n}\n"

/***/ }),

/***/ "./src/app/head-banner/data-picker/data-picker.component.html":
/*!********************************************************************!*\
  !*** ./src/app/head-banner/data-picker/data-picker.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-container\">\n  <div class=\"time-select-container\">\n    <select name=\"time-select\" class=\"time-select\" id=\"time-select\"  (change)=\"chooseTime()\" >\n      <option *ngFor=\"let time of timeNumber\"  value={{time}} >{{time+': 00'}}--{{time+1+': 00'}}</option>\n    </select>\n  </div>\n  <div *ngFor=\"let i of dayNumber\"  class=\"date-select\" >\n\n    <div class=\"date-select-container\" (click)=\"chooseDate(i)\">\n      <span class=\"date-container-month\">{{today+(1000*3600*24*i)|date:'MMM dd'}}</span><br>\n      <span class=\"date-container-day\">{{today+(1000*3600*24*i)|date:'E'}}</span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/head-banner/data-picker/data-picker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/head-banner/data-picker/data-picker.component.ts ***!
  \******************************************************************/
/*! exports provided: DataPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPickerComponent", function() { return DataPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_tablelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tablelist.service */ "./src/app/services/tablelist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataPickerComponent = /** @class */ (function () {
    function DataPickerComponent(tableListService) {
        this.tableListService = tableListService;
        this.today = Date.now();
        this.dayNumber = [0, 1, 2, 3, 4, 5, 6];
        this.timeNumber = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US');
        this.clickTime = 11;
        this.clickDate = Number(this.datePipe.transform((this.today), "yyyMMdd"));
        this.checkTimeList = Number(this.datePipe.transform((this.today), "yyyMMdd") + '11');
        this.unavailableTable = [];
    }
    DataPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clickDate = this.today;
        this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(function (response) {
            if (response['success'] == true) {
                _this.unavailableTable = response['tables'];
                _this.tableListService.assignUnavailableList(_this.unavailableTable);
                console.log(_this.tableListService.unAvailableList);
            }
        });
    };
    DataPickerComponent.prototype.chooseDate = function (index) {
        var _this = this;
        var getDateSelect = document.getElementsByClassName('date-select-container');
        for (var i = 0; i < getDateSelect.length; i++) {
            getDateSelect[i].children[0].classList.remove('date-click');
            getDateSelect[i].children[2].classList.remove('date-click');
        }
        getDateSelect[index].children[0].classList.add('date-click');
        getDateSelect[index].children[2].classList.add('date-click');
        this.clickDate = Number(this.datePipe.transform((this.today + 1000 * 3600 * 24 * index), "yyyMMdd"));
        this.tableListService.chooseDate = this.clickDate;
        this.checkTimeList = Number(this.clickDate + (document.getElementById('time-select').value));
        this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(function (response) {
            if (response['success'] == true) {
                _this.unavailableTable = response['tables'];
                _this.tableListService.assignUnavailableList(_this.unavailableTable);
                console.log(_this.tableListService.unAvailableList);
            }
        }, function (error) { console.log(error); });
    };
    DataPickerComponent.prototype.chooseTime = function () {
        var _this = this;
        this.clickTime = Number(document.getElementById('time-select').value);
        this.checkTimeList = Number(this.clickDate + (document.getElementById('time-select').value));
        this.tableListService.chooseTime = this.clickTime;
        this.tableListService.getUnavailableTables(this.checkTimeList).subscribe(function (response) {
            if (response['success'] == true) {
                _this.unavailableTable = response['tables'];
                _this.tableListService.assignUnavailableList(_this.unavailableTable);
                console.log(_this.tableListService.unAvailableList);
            }
        }, function (error) { console.log(error); });
    };
    DataPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-picker',
            template: __webpack_require__(/*! ./data-picker.component.html */ "./src/app/head-banner/data-picker/data-picker.component.html"),
            styles: [__webpack_require__(/*! ./data-picker.component.css */ "./src/app/head-banner/data-picker/data-picker.component.css")]
        })
        // It is a data picker component use for booking specified time in home page header
        // It is a sub component of head-banner
        ,
        __metadata("design:paramtypes", [_services_tablelist_service__WEBPACK_IMPORTED_MODULE_2__["TablelistService"]])
    ], DataPickerComponent);
    return DataPickerComponent;
}());



/***/ }),

/***/ "./src/app/head-banner/head-banner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/head-banner/head-banner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner-container{\n  margin: auto;\n  background-color: #364248;\n  display: flex;\n  width: 1240px;\n  height: 80px;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-around;\n\n}\n.head-banner-container .banner-icon{\n  flex: 0.5 50px;\n  height: 50px;\n  width: 50px;\n\n\n}\n.banner-icon img{\n  cursor: pointer;\n  padding: 10px;\n  height: 40px;\n  width: 40px;\n\n}\n.app-data-picker{\n  flex:5 300px;\n}\n。app-data-picker-title{\n  flex:5 300px;\n  margin-left: 100px;\n}\n.Book-btn{\n  flex: 0.5 150px;\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 10px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: 1s;\n  width: 120px;\n  margin-right: 30px;\n}\n.Book-btn:hover {\n  opacity: 1;\n  color: lightgray;\n  transition: 1s;\n}\n.Book-btn span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n\n}\n.Book-btn span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -10px;\n  transition: 0.5s;\n\n}\n.Book-btn:hover span {\n  padding-right: 15px;\n}\n.button:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n.Book-btn:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n.Book-btn:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n"

/***/ }),

/***/ "./src/app/head-banner/head-banner.component.html":
/*!********************************************************!*\
  !*** ./src/app/head-banner/head-banner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner-container\">\n\n      <div class=\"banner-icon\"><img src=\"../../assets/icons/menu-icon.png\" alt=\"\"></div>\n\n      <div class=\"banner-icon\"><img src=\"../../assets/icons/homepage-icon.png\" alt=\"\"></div>\n\n\n  <span>\n      <div class=\"app-data-picker-title\"></div>\n\n      <app-data-picker class=\"app-data-picker\"></app-data-picker>\n\n  </span>\n  <button class=\"Book-btn\" (click)=\"changeSubmit()\"><span>Booking</span></button>\n</div>\n"

/***/ }),

/***/ "./src/app/head-banner/head-banner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/head-banner/head-banner.component.ts ***!
  \******************************************************/
/*! exports provided: HeadBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadBannerComponent", function() { return HeadBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bookinglist.service */ "./src/app/services/bookinglist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadBannerComponent = /** @class */ (function () {
    function HeadBannerComponent(BookingService) {
        this.BookingService = BookingService;
    }
    HeadBannerComponent.prototype.ngOnInit = function () {
    };
    HeadBannerComponent.prototype.changeSubmit = function () {
        this.BookingService.submitFormState = false;
    };
    HeadBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head-banner',
            template: __webpack_require__(/*! ./head-banner.component.html */ "./src/app/head-banner/head-banner.component.html"),
            styles: [__webpack_require__(/*! ./head-banner.component.css */ "./src/app/head-banner/head-banner.component.css")]
        })
        // header component in home page
        ,
        __metadata("design:paramtypes", [_services_bookinglist_service__WEBPACK_IMPORTED_MODULE_1__["BookinglistService"]])
    ], HeadBannerComponent);
    return HeadBannerComponent;
}());



/***/ }),

/***/ "./src/app/services/bookinglist.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/bookinglist.service.ts ***!
  \*************************************************/
/*! exports provided: BookinglistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookinglistService", function() { return BookinglistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookinglistService = /** @class */ (function () {
    function BookinglistService(http) {
        this.http = http;
        this.serverAPI = 'http://localhost:3000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
        this.submitFormState = true;
    }
    BookinglistService.prototype.getAllBooking = function () {
        var URI = this.serverAPI + "/booklist";
        return this.http.get(URI);
    };
    BookinglistService.prototype.getBookingByUserName = function (postData) {
        var URI = this.serverAPI + "/booklist/getBookingListByUserName";
        var body = JSON.stringify({
            "username": postData.username,
        });
        return this.http.post(URI, body, { headers: this.headers });
    };
    BookinglistService.prototype.addNewBooking = function (newBooking) {
        var URI = this.serverAPI + "/booklist/addNewBooking";
        var body = newBooking;
        return this.http.post(URI, body, { headers: this.headers });
    };
    BookinglistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookinglistService);
    return BookinglistService;
}());



/***/ }),

/***/ "./src/app/services/tablelist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/tablelist.service.ts ***!
  \***********************************************/
/*! exports provided: TablelistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablelistService", function() { return TablelistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablelistService = /** @class */ (function () {
    function TablelistService(http) {
        this.http = http;
        this.serverAPI = 'http://localhost:3000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
        this.unAvailableList = [];
        this.availableTableList = [];
        this.chooseTime = 11;
        this.chooseDate = Number(this.datePipe.transform((Date.now()), "yyyMMdd"));
    }
    TablelistService.prototype.assignUnavailableList = function (tableList) {
        this.unAvailableList = tableList;
    };
    TablelistService.prototype.getAllTables = function () {
        var URI = this.serverAPI + "/tablelist";
        return this.http.get(URI);
    };
    TablelistService.prototype.getAllSmallTables = function () {
        var URI = this.serverAPI + "/tablelist/getsmalltables";
        return this.http.get(URI);
    };
    TablelistService.prototype.getAllBigTables = function () {
        var URI = this.serverAPI + "/tablelist/getbigtables";
        return this.http.get(URI);
    };
    TablelistService.prototype.getUnavailableTables = function (bookTime) {
        var URI = this.serverAPI + "/tablelist/getTableByBooktimeList";
        var body = JSON.stringify({
            "booktimeList": bookTime
        });
        return this.http.post(URI, body, { headers: this.headers });
    };
    TablelistService.prototype.getAvailableTable = function (postData) {
        var URI = this.serverAPI + "/tablelist/getTableByBooktimeAndType";
        var body = JSON.stringify({
            "booktimeList": postData.booktimeList,
            "tableType": postData.tableType,
        });
        return this.http.post(URI, body, { headers: this.headers });
    };
    TablelistService.prototype.updateBookTimeForTable = function (postData) {
        var URI = this.serverAPI + "/tablelist/updateBooktime";
        var body = JSON.stringify({
            "tableNumber": postData.tableNumber,
            "booktimeList": postData.bookingTime,
        });
        return this.http.post(URI, body, { headers: this.headers });
    };
    TablelistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TablelistService);
    return TablelistService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverAPI = 'http://localhost:3000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
    }
    UserService.prototype.getAllUser = function () {
        var URI = this.serverAPI + "/user";
        return this.http.get(URI);
    };
    UserService.prototype.register = function (postData) {
        var URI = this.serverAPI + "/user/";
        var body = JSON.stringify({
            "username": postData.username,
            "password": postData.password,
            "firstName": postData.firstName,
            "lastName": postData.lastName,
            "phoneNumber": postData.phoneNumber,
        });
        return this.http.post(URI, body, { headers: this.headers });
    };
    UserService.prototype.delete = function (name) {
        var URI = this.serverAPI + "/user/";
        return this.http.delete(URI + name);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/table-map/table-map.component.css":
/*!***************************************************!*\
  !*** ./src/app/table-map/table-map.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".restaurant-map-container{\n\n  box-sizing: border-box;\n  width: 1240px;\n  height: 660px;\n  border: 2px solid lightslategray;\n  margin: auto;\n  position: relative;\n\n}\n\n.picker{\n  text-align: center;\n}\n\n.live-kitchen{\n  position: absolute;\n  height: 300px;\n  width: 150px;\n  border: 2px solid lightslategray;\n  border-left: 0px;\n  top: 220px;\n}\n\n.entrance{\n  position: absolute;\n  height: 100px;\n  width: 80px;\n  border: 2px solid lightslategray;\n  border-left: 0px;\n  border-right: 0px;\n  top: 20px;\n}\n\n.live-kitchen p, .entrance p {\n  color: lightslategray;\n  text-align: center;\n}\n\n.live-kitchen p{\n\n  line-height: 250px;\n}\n\n.entrance p {\n  line-height: 60px;\n}\n\n/*Css for square-table-1  */\n\n.square-table-map-container{\n  position: absolute;\n  width: 1000px;\n  right: 0px;\n  top: 30px;\n\n  /*display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;*/\n}\n\n.square-table-container-1{\n  width: 900px;\n  height: 140px;\n  margin-left: 80px;\n  margin-top: 30px;\n\n}\n\n.square-table{\n  width: 140px;\n  height: 140px;\n  float: left;\n  margin: 10px 5px;\n}\n\n/*Css for circle-table  */\n\n.circle-table-map-container{\n\n  position: absolute;\n  width: 1000px;\n  height: 260px;\n  top:400px;\n  right: 0px;\n\n}\n\n.circle-table-container-1{\n  width: 900px;\n  height: 260px;\n  margin-left: 120px;\n\n}\n\n.circle-table-map-container .circle-table-container-1 .circle-table {\n  float: left;\n  margin: 10px 60px;\n}\n\n/* css for booking form*/\n\n.submit-booking-form{\n  position: absolute;\n  right: 0;\n  top: 0px;\n  width: 500px;\n  height: 600px;\n}\n\n.submit_form_State{\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/table-map/table-map.component.html":
/*!****************************************************!*\
  !*** ./src/app/table-map/table-map.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"restaurant-map-container\">\n  <div class=\"entrance\"><p>Entrance</p></div>\n  <div class=\"live-kitchen\"><p>Live kitchen</p></div>\n\n\n\n  <div class=\"square-table-map-container\" >\n    <div class=\"square-table-container-1\" (click)=\"changeSubmitState()\" >\n    <app-square-table class=\"square-table\"  *ngFor=\"let tableInfo of allSmallTables\" [tableNumber]=\"tableInfo['tableNumber']\" [unAvailable]=\"unAvailableTables\"></app-square-table>\n    </div>\n  </div>\n\n  <div class=\"circle-table-map-container\">\n    <div class=\"circle-table-container-1\" (click)=\"changeSubmitState()\">\n      <app-circle-table class=\"circle-table\" *ngFor=\"let tableInfo of allBigTables\" [tableNumber]=\"tableInfo['tableNumber']\" [unAvailable]=\"unAvailableTables\" ></app-circle-table>\n    </div>\n\n  </div>\n\n  <div class=\"submit-booking-form\" [ngClass]=\"{'submit_form_State' : submitFormState}\">\n    <app-submit-booking-form ></app-submit-booking-form>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/table-map/table-map.component.ts":
/*!**************************************************!*\
  !*** ./src/app/table-map/table-map.component.ts ***!
  \**************************************************/
/*! exports provided: TableMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableMapComponent", function() { return TableMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tablelist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tablelist.service */ "./src/app/services/tablelist.service.ts");
/* harmony import */ var _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bookinglist.service */ "./src/app/services/bookinglist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableMapComponent = /** @class */ (function () {
    function TableMapComponent(tableService, BookingService) {
        this.tableService = tableService;
        this.BookingService = BookingService;
        this.allSmallTables = [];
        this.allBigTables = [];
        this.unAvailableTables = [];
        this.submitFormState = true;
        this.unAvailableTables = this.tableService.unAvailableList;
    }
    TableMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all small tables
        this.tableService.getAllSmallTables().subscribe(function (response) {
            if (response['success'] == true) {
                _this.allSmallTables = response['tables'];
                // console.log(this.allSmallTables)
            }
        }, function (error) {
            console.log(error);
        });
        //get all big tables
        this.tableService.getAllBigTables().subscribe(function (response) {
            if (response['success'] == true) {
                _this.allBigTables = response['tables'];
                // console.log(this.allBigTables)
            }
        }, function (error) {
            console.log(error);
        });
    };
    TableMapComponent.prototype.ngDoCheck = function () {
        this.submitFormState = this.BookingService.submitFormState;
        if (this.unAvailableTables != this.tableService.unAvailableList) {
            this.unAvailableTables = this.tableService.unAvailableList;
        }
    };
    TableMapComponent.prototype.changeSubmitState = function () {
        this.BookingService.submitFormState = false;
    };
    TableMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-map',
            template: __webpack_require__(/*! ./table-map.component.html */ "./src/app/table-map/table-map.component.html"),
            styles: [__webpack_require__(/*! ./table-map.component.css */ "./src/app/table-map/table-map.component.css")],
        })
        // this component is use for demonstrate table map of restaurant in home page
        ,
        __metadata("design:paramtypes", [_services_tablelist_service__WEBPACK_IMPORTED_MODULE_1__["TablelistService"],
            _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_2__["BookinglistService"]])
    ], TableMapComponent);
    return TableMapComponent;
}());



/***/ }),

/***/ "./src/app/tableType/circle-table/circle-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tableType/circle-table/circle-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-table-container{\n  width: 100px;\n  height: 100px;\n\n  left: 100px;\n  top: 100px;\n  padding: 20px;\n}\n\n.circle-table{\n  position:relative;\n  cursor: pointer;\n  width: 120px;\n  height: 120px;\n  border: 1.5px solid lightslategray;\n  border-radius: 50%;\n}\n\n.circle-table-1{\n  position: absolute;\n  top: -15px;\n  left: 45px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n}\n\n.circle-table-2{\n  position: absolute;\n  bottom: -15px;\n  left: 45px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n}\n\n.circle-table-3{\n  position: absolute;\n  top: 55px;\n  left: -25px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.circle-table-4{\n  position: absolute;\n  top: 55px;\n  right: -25px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.circle-table-5{\n  position: absolute;\n  top: 5px;\n  right: -2px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.circle-table-6{\n  position: absolute;\n  top: 110px;\n  right: -2px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.circle-table-7{\n  position: absolute;\n  top: 5px;\n  left: -5px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.circle-table-8{\n  position: absolute;\n  top: 110px;\n  left: -5px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.circle-table:hover {\n  background-color: lightslategray;\n  transition: 0.5s;\n}\n\n.circle-table span{\n  position: absolute;\n  top: 50px;\n  left: 50px;\n}\n\n.table_unavailable {\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  pointer-events: none;\n  cursor: not-allowed;\n  background-color: darkorange;\n}\n\n.submit_form_State{\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/tableType/circle-table/circle-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/circle-table/circle-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circle-table-container\">\n\n  <div class=\"circle-table\"  [ngClass]=\"{table_unavailable : tableUnavailable}\">\n    <span>  {{tableNumber}}</span>\n    <div class=\"circle-table-1\"></div>\n    <div class=\"circle-table-2\"></div>\n    <div class=\"circle-table-3\"></div>\n    <div class=\"circle-table-4\"></div>\n    <div class=\"circle-table-5\"></div>\n    <div class=\"circle-table-6\"></div>\n    <div class=\"circle-table-7\"></div>\n    <div class=\"circle-table-8\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tableType/circle-table/circle-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tableType/circle-table/circle-table.component.ts ***!
  \******************************************************************/
/*! exports provided: CircleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleTableComponent", function() { return CircleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircleTableComponent = /** @class */ (function () {
    function CircleTableComponent() {
    }
    CircleTableComponent.prototype.ngOnInit = function () {
    };
    CircleTableComponent.prototype.ngDoCheck = function () {
        this.checkUnavailableTable();
    };
    CircleTableComponent.prototype.checkUnavailableTable = function () {
        this.tableUnavailable = false;
        for (var i = 0; i < this.unAvailable.length; i++) {
            if (this.tableNumber == this.unAvailable[i]['tableNumber']) {
                this.tableUnavailable = true;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CircleTableComponent.prototype, "tableNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CircleTableComponent.prototype, "unAvailable", void 0);
    CircleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-circle-table',
            template: __webpack_require__(/*! ./circle-table.component.html */ "./src/app/tableType/circle-table/circle-table.component.html"),
            styles: [__webpack_require__(/*! ./circle-table.component.css */ "./src/app/tableType/circle-table/circle-table.component.css")]
        })
        // this component is use for demonstrate in home page
        // It is a sub component of table-map
        ,
        __metadata("design:paramtypes", [])
    ], CircleTableComponent);
    return CircleTableComponent;
}());



/***/ }),

/***/ "./src/app/tableType/square-table/square-table.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tableType/square-table/square-table.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square-table-container{\n  width: 100px;\n  height: 100px;\n\n  left: 100px;\n  top: 100px;\n  padding: 20px;\n}\n\n.square-table{\n  position: relative;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  border: 1.5px solid lightslategray;\n  ;\n\n}\n\n.square-table-desk-up{\n  position: absolute;\n  top: -18px;\n  left: 25px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n}\n\n.square-table-desk-down{\n  position: absolute;\n  bottom: -16px;\n  left: 25px;\n  width:  25px;\n  height: 8px;\n  border: 1px solid darkgray;\n\n}\n\n.square-table-desk-left{\n  position: absolute;\n  top: 25px;\n  left: -20px;\n  width:  8px;\n  height: 25px;\n  border: 1px solid darkgray;\n\n}\n\n.square-table-desk-right{\n  position: absolute;\n  top: 25px;\n  right: -20px;\n  width:  8px;\n  height: 25px;\n  border: 1px solid darkgray;\n\n}\n\n.square-table:hover {\n  background-color: lightslategray;\n  transition: 0.5s;\n}\n\n.square-table span{\n  position: absolute;\n  top: 30px ;\n  left: 30px;\n}\n\n.table_unavailable {\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  pointer-events: none;\n  cursor: not-allowed;\n  background-color: darkorange;\n}\n"

/***/ }),

/***/ "./src/app/tableType/square-table/square-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/square-table/square-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"square-table-container\">\n\n      <div class=\"square-table\" [ngClass]=\"{table_unavailable : tableUnavailable}\" (click)=\"onclick()\" >\n        <span>{{tableNumber}}</span>\n        <div class=\"square-table-desk-up\"></div>\n        <div class=\"square-table-desk-down\"></div>\n        <div class=\"square-table-desk-left\"></div>\n        <div class=\"square-table-desk-right\"></div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tableType/square-table/square-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tableType/square-table/square-table.component.ts ***!
  \******************************************************************/
/*! exports provided: SquareTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquareTableComponent", function() { return SquareTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SquareTableComponent = /** @class */ (function () {
    function SquareTableComponent() {
    }
    SquareTableComponent.prototype.ngOnInit = function () {
    };
    SquareTableComponent.prototype.onclick = function () {
        console.log('a');
    };
    SquareTableComponent.prototype.ngDoCheck = function () {
        this.checkUnavailableTable();
    };
    SquareTableComponent.prototype.checkUnavailableTable = function () {
        this.tableUnavailable = false;
        for (var i = 0; i < this.unAvailable.length; i++) {
            if (this.tableNumber == this.unAvailable[i]['tableNumber']) {
                this.tableUnavailable = true;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SquareTableComponent.prototype, "tableNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SquareTableComponent.prototype, "unAvailable", void 0);
    SquareTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-square-table',
            template: __webpack_require__(/*! ./square-table.component.html */ "./src/app/tableType/square-table/square-table.component.html"),
            styles: [__webpack_require__(/*! ./square-table.component.css */ "./src/app/tableType/square-table/square-table.component.css")]
        })
        // this component is use for demonstrate in home page
        // It is a sub component of table-map
        ,
        __metadata("design:paramtypes", [])
    ], SquareTableComponent);
    return SquareTableComponent;
}());



/***/ }),

/***/ "./src/app/views/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-head-banner></app-head-banner>\n<app-table-map class=\"row\"></app-table-map>\n\n<!--<p><a [routerLink]=\"['/login']\">Logout</a></p>-->\n"

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/views/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/views/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4200'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mc/Documents/UTS/course/2018Spring/Advanced Internet Programming/-FF/angular_src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map