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

module.exports = "<div class=\"text-center\" *ngIf=\"message\" ngClass=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n      {{message.text}}\r\n</div>\r\n"

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

module.exports = "<h1>Hi {{currentUser.firstName}}!</h1>\r\n<p>You're logged in with Angular 6!!</p>\r\n<h3>All registered users:</h3>\r\n<ul>\r\n  <li *ngFor=\"let user of users\">\r\n    {{user.username}} ({{user.firstName}} {{user.lastName}})\r\n    - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\r\n  </li>\r\n</ul>\r\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\r\n"

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
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../~services/user.service */ "./src/app/Login_register/~services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Login_register/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Login_register/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "<div class=\"login-container\">\r\n  <h2 class=\"text-center\">Login</h2>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n  </form>\r\n</div>\r\n"

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

module.exports = "<div class=\"register-container\">\r\n  <h2 class=\"text-center\">Register</h2>\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"firstName\">First Name</label>\r\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"lastName\">Last Name</label>\r\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n            </div>\r\n        </div>\r\n              <div class=\"form-group\">\r\n              <label for=\"phoneNumber\">phoneNumber</label>\r\n              <input type=\"text\" formControlName=\"phoneNumber\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n              <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n              </div>\r\n          </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n        </div>\r\n  </form>\r\n</div>\r\n"

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
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
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
/* harmony import */ var _views_book_list_page_book_list_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/book-list-page/book-list-page.component */ "./src/app/views/book-list-page/book-list-page.component.ts");
/* harmony import */ var _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/main-page/main-page.component */ "./src/app/views/main-page/main-page.component.ts");
/* harmony import */ var _views_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/menu-page/menu-page.component */ "./src/app/views/menu-page/menu-page.component.ts");









var appRoutes = [
    { path: 'HomePage', component: _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"] },
    { path: 'usermanagement', component: _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: '', component: _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'Booksystem', component: _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'BookList', component: _views_book_list_page_book_list_page_component__WEBPACK_IMPORTED_MODULE_6__["BookListPageComponent"] },
    { path: 'Menu', component: _views_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_8__["MenuPageComponent"] },
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

module.exports = ".container{\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  max-width: 2500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n\r\n    <div class=\"container\">\r\n\r\n      <div class=\"col \">\r\n        <app-alert></app-alert>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n"

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
/* harmony import */ var _views_book_list_page_book_list_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/book-list-page/book-list-page.component */ "./src/app/views/book-list-page/book-list-page.component.ts");
/* harmony import */ var _components_frame_top_frame_top_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/frame-top/frame-top.component */ "./src/app/components/frame-top/frame-top.component.ts");
/* harmony import */ var _components_frame_bottom_frame_bottom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/frame-bottom/frame-bottom.component */ "./src/app/components/frame-bottom/frame-bottom.component.ts");
/* harmony import */ var _components_content_booklist_content_booklist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/content-booklist/content-booklist.component */ "./src/app/components/content-booklist/content-booklist.component.ts");
/* harmony import */ var _components_content_mainpage_content_mainpage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/content-mainpage/content-mainpage.component */ "./src/app/components/content-mainpage/content-mainpage.component.ts");
/* harmony import */ var _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/main-page/main-page.component */ "./src/app/views/main-page/main-page.component.ts");
/* harmony import */ var _views_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/menu-page/menu-page.component */ "./src/app/views/menu-page/menu-page.component.ts");
/* harmony import */ var _components_content_menu_content_menu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/content-menu/content-menu.component */ "./src/app/components/content-menu/content-menu.component.ts");
/* harmony import */ var _components_frame_top_nav_frame_top_nav_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/frame-top-nav/frame-top-nav.component */ "./src/app/components/frame-top-nav/frame-top-nav.component.ts");
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
                _head_banner_head_banner_component__WEBPACK_IMPORTED_MODULE_25__["HeadBannerComponent"],
                _views_book_list_page_book_list_page_component__WEBPACK_IMPORTED_MODULE_26__["BookListPageComponent"],
                _components_frame_top_frame_top_component__WEBPACK_IMPORTED_MODULE_27__["FrameTopComponent"],
                _components_frame_bottom_frame_bottom_component__WEBPACK_IMPORTED_MODULE_28__["FrameBottomComponent"],
                _components_content_booklist_content_booklist_component__WEBPACK_IMPORTED_MODULE_29__["ContentBooklistComponent"],
                _components_content_mainpage_content_mainpage_component__WEBPACK_IMPORTED_MODULE_30__["ContentMainpageComponent"],
                _views_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_31__["MainPageComponent"],
                _views_menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_32__["MenuPageComponent"],
                _components_content_menu_content_menu_component__WEBPACK_IMPORTED_MODULE_33__["ContentMenuComponent"],
                _components_frame_top_nav_frame_top_nav_component__WEBPACK_IMPORTED_MODULE_34__["FrameTopNavComponent"]
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

/***/ "./src/app/components/content-booklist/content-booklist.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/content-booklist/content-booklist.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".booklist-container{\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card-container{\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/content-booklist/content-booklist.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content-booklist/content-booklist.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"booklist-container\">\r\n\r\n\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Current\" class=\"menu-title\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"card-container\">\r\n\r\n              <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let booklist of currentBookList\">\r\n                <img class=\"card-img-top\" src=\"../../../assets/booking-list-imgag.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{booklist['tableNumber']}}</h5>\r\n                  <p class=\"card-text\"><b>BookingTime:</b>{{booklist['bookingTime']}}</p>\r\n                  <p class=\"card-text\"><b>Customer:</b>{{booklist['username']}}</p>\r\n                  <p class=\"card-text\"><b>PhoneNumber:</b>{{booklist['phoneNumber']}}</p>\r\n                  <p class=\"card-text\"><b>Total number of people:</b>{{booklist['peopleNumber']}}</p>\r\n                  <p class=\"card-text\"><b>Message:</b>{{booklist['message']}}</p>\r\n                  <a class=\"btn btn-danger\" (click)=\"deleteBooking(booklist)\">Cancel</a>\r\n\r\n\r\n                </div>\r\n              </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>History</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"card-container\">\r\n\r\n          <div class=\"card\" style=\"width: 18rem;\" *ngFor=\"let booklist of historyBookList\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/booking-list-imgag.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{booklist['tableNumber']}}</h5>\r\n              <p class=\"card-text\"><b>BookingTime:</b>{{booklist['bookingTime']}}</p>\r\n              <p class=\"card-text\"><b>Customer:</b>{{booklist['username']}}</p>\r\n              <p class=\"card-text\"><b>PhoneNumber:</b>{{booklist['phoneNumber']}}</p>\r\n              <p class=\"card-text\"><b>Total number of people:</b>{{booklist['peopleNumber']}}</p>\r\n              <p class=\"card-text\"><b>Message:</b>{{booklist['message']}}</p>\r\n              <a class=\"btn btn-danger\" (click)=\"deleteBooking(booklist)\">Delete</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content-booklist/content-booklist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-booklist/content-booklist.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentBooklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBooklistComponent", function() { return ContentBooklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bookinglist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bookinglist.service */ "./src/app/services/bookinglist.service.ts");
/* harmony import */ var _services_tablelist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tablelist.service */ "./src/app/services/tablelist.service.ts");
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





var ContentBooklistComponent = /** @class */ (function () {
    function ContentBooklistComponent(BookingService, TableService, router) {
        this.BookingService = BookingService;
        this.TableService = TableService;
        this.router = router;
        this.today = Date.now();
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.currentDate = Number(this.datePipe.transform((this.today), "yyyMMddhh"));
        this.getBookingList = [];
        this.historyBookList = [];
        this.currentBookList = [];
    }
    ContentBooklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var postUserName = {
            "username": "test"
        };
        var postUserWithTime = {
            "username": "test",
            "bookingTime": this.currentDate
        };
        this.BookingService.getBookingByUserName(postUserName).subscribe(function (response) {
            if (response['success'] == true) {
                _this.getBookingList = response['booklists'];
            }
        }, function (error) { console.log(error); });
        this.BookingService.getHistoryBookByUserName(postUserWithTime).subscribe(function (response) {
            if (response['success'] == true) {
                _this.historyBookList = response['booklists'];
            }
        }, function (error) { console.log(error); });
        this.BookingService.getCurrentListbyUserName(postUserWithTime).subscribe(function (response) {
            if (response['success'] == true) {
                _this.currentBookList = response['booklists'];
            }
        }, function (error) { console.log(error); });
    };
    ContentBooklistComponent.prototype.ngDoCheck = function () {
    };
    ContentBooklistComponent.prototype.deleteBooking = function (postData) {
        if (confirm('Are you sure to delete ?') == true) {
            var deleteBook = {
                username: postData.username,
                bookingTime: postData.bookingTime,
                tableNumber: postData.tableNumber
            };
            var deletedTimeListofTable = {
                bookingTime: postData.bookingTime,
                tableNumber: postData.tableNumber
            };
            this.BookingService.deleteBooking(deleteBook).subscribe(function (response) {
                if (response['success'] == true) {
                    console.log(response);
                }
            }, function (error) { console.log(error); });
            this.TableService.deleteBookTimeForTable(deletedTimeListofTable).subscribe(function (response) {
                if (response['success'] == true) {
                    console.log(response);
                }
            }, function (error) { console.log(error); });
        }
        else {
        }
    };
    ContentBooklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-booklist',
            template: __webpack_require__(/*! ./content-booklist.component.html */ "./src/app/components/content-booklist/content-booklist.component.html"),
            styles: [__webpack_require__(/*! ./content-booklist.component.css */ "./src/app/components/content-booklist/content-booklist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookinglist_service__WEBPACK_IMPORTED_MODULE_2__["BookinglistService"],
            _services_tablelist_service__WEBPACK_IMPORTED_MODULE_3__["TablelistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContentBooklistComponent);
    return ContentBooklistComponent;
}());



/***/ }),

/***/ "./src/app/components/content-mainpage/content-mainpage.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/content-mainpage/content-mainpage.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  max-width: 1236px;\r\n  display: flex;\r\n  align-content: stretch;\r\n  align-items: stretch;\r\n  flex-flow: row nowrap;\r\n  padding: 0;\r\n}\r\n\r\n.container .card{\r\n  width: 34%;\r\n  height: 660px;\r\n  max-height: 660px;\r\n  cursor: pointer;\r\n}\r\n\r\n.container .card span{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: rgba(237, 237, 237, 0.54);\r\n  margin-top: 250px;\r\n\r\n}\r\n\r\n.card-title{\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.system_background{\r\n  background-image: url('main-page-makbooking.jpg');\r\n\r\n\r\n}\r\n\r\n.system_Menu{\r\n  background-image: url('main-page-menu.png');\r\n\r\n}\r\n\r\n.system_BookiList{\r\n  background-image: url('main-page-reserve.jpg');\r\n  background-position: -300px;\r\n}\r\n\r\n.container .card:hover{\r\n  opacity: 0.5;\r\n}\r\n\r\n.card:hover span h5{\r\n  color: #1767e5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/content-mainpage/content-mainpage.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/content-mainpage/content-mainpage.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <a class=\"card system_background\" routerLink=\"/Booksystem\">\r\n\r\n        <span> <h5 class=\"card-title \">Booking System</h5>\r\n        </span>\r\n\r\n  </a>\r\n  <a class=\"card system_Menu\"  routerLink=\"/Menu\">\r\n      <span><h5 class=\"card-title \">Menu</h5></span>\r\n  </a>\r\n  <a class=\"card system_BookiList\"  routerLink=\"/BookList\">\r\n      <span><h5 class=\"card-title \">MY Booking</h5></span>\r\n  </a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content-mainpage/content-mainpage.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/content-mainpage/content-mainpage.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContentMainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentMainpageComponent", function() { return ContentMainpageComponent; });
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

var ContentMainpageComponent = /** @class */ (function () {
    function ContentMainpageComponent() {
    }
    ContentMainpageComponent.prototype.ngOnInit = function () {
    };
    ContentMainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-mainpage',
            template: __webpack_require__(/*! ./content-mainpage.component.html */ "./src/app/components/content-mainpage/content-mainpage.component.html"),
            styles: [__webpack_require__(/*! ./content-mainpage.component.css */ "./src/app/components/content-mainpage/content-mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentMainpageComponent);
    return ContentMainpageComponent;
}());



/***/ }),

/***/ "./src/app/components/content-menu/content-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/content-menu/content-menu.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  max-width: 1236px;\r\n  display: flex;\r\n  align-content: stretch;\r\n  align-items: stretch;\r\n  flex-flow: row nowrap;\r\n  padding: 0;\r\n  justify-content: space-around;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/content-menu/content-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/content-menu/content-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Lunch\" class=\"menu-title\">\r\n      <ng-template ngbTabContent>\r\n        <img src=\"../../../assets/Lunch-new.jpg\" alt=\"\">\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Dinner</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <img src=\"../../../assets/Dinner-new.jpg\" alt=\"\">\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content-menu/content-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/content-menu/content-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentMenuComponent", function() { return ContentMenuComponent; });
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

var ContentMenuComponent = /** @class */ (function () {
    function ContentMenuComponent() {
    }
    ContentMenuComponent.prototype.ngOnInit = function () {
    };
    ContentMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-menu',
            template: __webpack_require__(/*! ./content-menu.component.html */ "./src/app/components/content-menu/content-menu.component.html"),
            styles: [__webpack_require__(/*! ./content-menu.component.css */ "./src/app/components/content-menu/content-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentMenuComponent);
    return ContentMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/frame-bottom/frame-bottom.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/frame-bottom/frame-bottom.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".restaurant-map-container{\r\n\r\n  box-sizing: border-box;\r\n  width: 1240px;\r\n  min-height: 660px;\r\n  border: 2px solid lightslategray;\r\n  margin: auto;\r\n  position: relative;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/frame-bottom/frame-bottom.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/frame-bottom/frame-bottom.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"restaurant-map-container\">\r\n  <ng-content></ng-content>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/frame-bottom/frame-bottom.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/frame-bottom/frame-bottom.component.ts ***!
  \*******************************************************************/
/*! exports provided: FrameBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameBottomComponent", function() { return FrameBottomComponent; });
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

var FrameBottomComponent = /** @class */ (function () {
    function FrameBottomComponent() {
    }
    FrameBottomComponent.prototype.ngOnInit = function () {
    };
    FrameBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-bottom',
            template: __webpack_require__(/*! ./frame-bottom.component.html */ "./src/app/components/frame-bottom/frame-bottom.component.html"),
            styles: [__webpack_require__(/*! ./frame-bottom.component.css */ "./src/app/components/frame-bottom/frame-bottom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameBottomComponent);
    return FrameBottomComponent;
}());



/***/ }),

/***/ "./src/app/components/frame-top-nav/frame-top-nav.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/frame-top-nav/frame-top-nav.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner-container{\r\n\r\n  background-color: #364248;\r\n  display: flex;\r\n  width: 1240px;\r\n  height: 80px;\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n\r\n}\r\n.head-banner-container .banner-icon{\r\n  flex: 0.2 50px;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n}\r\n.head-banner-container .col{\r\n  display: flex;\r\n  flex-flow: nowrap row;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n.banner-icon img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n\r\n}\r\n.btn-outline-primary img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\na{\r\n  cursor: pointer;\r\n}\r\n#dropdownBasic1{\r\n  border:none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n#dropdownBasic1:after{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/frame-top-nav/frame-top-nav.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/frame-top-nav/frame-top-nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner-container\">\r\n\r\n  <div class=\"col\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><img src=\"../../assets/icons/menu-icon.png\" alt=\"\"></button>\r\n      <div ngbDropdownMenu aria-labelledby=\"/dropdownBasic1\">\r\n        <a class=\"dropdown-item\" routerLink=\"/Booksystem\">Booking System</a>\r\n        <a class=\"dropdown-item\" routerLink=\"/Menu\">Menu</a>\r\n        <a class=\"dropdown-item\" routerLink=\"/BookList\">My BookingList</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\">Login out</a>\r\n      </div>\r\n    </div>\r\n    <a class=\"banner-icon\" routerLink=\"/HomePage\"><img src=\"../../assets/icons/homepage-icon.png\" alt=\"\"></a>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/frame-top-nav/frame-top-nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/frame-top-nav/frame-top-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: FrameTopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameTopNavComponent", function() { return FrameTopNavComponent; });
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

var FrameTopNavComponent = /** @class */ (function () {
    function FrameTopNavComponent() {
    }
    FrameTopNavComponent.prototype.ngOnInit = function () {
    };
    FrameTopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-top-nav',
            template: __webpack_require__(/*! ./frame-top-nav.component.html */ "./src/app/components/frame-top-nav/frame-top-nav.component.html"),
            styles: [__webpack_require__(/*! ./frame-top-nav.component.css */ "./src/app/components/frame-top-nav/frame-top-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameTopNavComponent);
    return FrameTopNavComponent;
}());



/***/ }),

/***/ "./src/app/components/frame-top/frame-top.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/frame-top/frame-top.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-banner-container{\r\n  margin: auto;\r\n  background-color: #364248;\r\n  display: flex;\r\n  width: 1240px;\r\n  height: 80px;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n}\r\n.head-banner-container .banner-icon{\r\n  flex: 0.5 50px;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n\r\n}\r\n.banner-icon img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/frame-top/frame-top.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/frame-top/frame-top.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner-container\">\r\n\r\n  <!--<div class=\"banner-icon\"><img src=\"../../assets/icons/menu-icon.png\" alt=\"\"></div>-->\r\n\r\n  <!--<div class=\"banner-icon\"><img src=\"../../assets/icons/homepage-icon.png\" alt=\"\"></div>-->\r\n  <ng-content></ng-content>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/frame-top/frame-top.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/frame-top/frame-top.component.ts ***!
  \*************************************************************/
/*! exports provided: FrameTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameTopComponent", function() { return FrameTopComponent; });
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

var FrameTopComponent = /** @class */ (function () {
    function FrameTopComponent() {
    }
    FrameTopComponent.prototype.ngOnInit = function () {
    };
    FrameTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frame-top',
            template: __webpack_require__(/*! ./frame-top.component.html */ "./src/app/components/frame-top/frame-top.component.html"),
            styles: [__webpack_require__(/*! ./frame-top.component.css */ "./src/app/components/frame-top/frame-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameTopComponent);
    return FrameTopComponent;
}());



/***/ }),

/***/ "./src/app/components/submit-booking-form/submit-booking-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/submit-booking-form/submit-booking-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit_container{\r\n  border: solid 2px lightslategray ;\r\n}\r\n\r\n.submit_top{\r\n  height: 50px;\r\n  background-color: #d96673;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.submit_top button{\r\n  background-color: #d96673;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 80px;\r\n}\r\n\r\n.submit_top button:hover{\r\n  color: darkblue;\r\n}\r\n\r\n.submit_content{\r\n  height: 550px;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.submit_content .submit_content_title{\r\n  height: 30px;\r\n  padding-left: 10px;\r\n  background-color: rgb(227, 227, 227);\r\n}\r\n\r\n.submit_content .submit_content_userinfo{\r\n  position: relative;\r\n  height: 100px;\r\n\r\n}\r\n\r\n.submit_content_userinfo_icon{\r\n  position: absolute;\r\n  width: 100px;\r\n  horiz-align: center;\r\n  vertical-align: center;\r\n  left: 30px;\r\n}\r\n\r\n.submit_content_userinfo_icon div{\r\n  width: 70px;\r\n  height: 70px;\r\n  margin: auto;\r\n  margin-top: 15px;\r\n  border: solid 1px black;\r\n  background-color: #d2644f;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  font-size: 30px;\r\n  color: white;\r\n  line-height: 65px;\r\n  font-weight: bold;\r\n}\r\n\r\n.submit_content_userinfo_Info{\r\n  height: 100px;\r\n  position: absolute;\r\n  left: 130px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.submit_content_userinfo_Info_Username{\r\n  font-size: 25px;\r\n}\r\n\r\n.submit_content_userinfo_button{\r\n  height: 100px;\r\n  position: absolute;\r\n  right: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.submit_content_userinfo_button span{\r\n\r\n  border: none;\r\n  background-color: white;\r\n  color: dodgerblue;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  line-height: 90px;\r\n}\r\n\r\n.submit_content .submit_content_bookinginfo{\r\n  height: 200px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n.submit_content .submit_content_bookinginfo li{\r\n  list-style: none;\r\n  height: 50px;\r\n  width: 100%;\r\n  align-items:center;\r\n  padding-left: 80px;\r\n}\r\n\r\n.submit_content_bookinginfo .submit_time{\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n\r\n.submit_content .submit_content_message{\r\n  height: 100px;\r\n}\r\n\r\n.btn-primary{\r\n  background-color: #666666;\r\n  border: none;\r\n}\r\n\r\n.submit-table label{\r\n  padding: .375rem .35rem\r\n}\r\n\r\n.submit_form_State{\r\n  display: none;\r\n}\r\n\r\n#submit_message{\r\n  width: 100%;\r\n  height: 175px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/submit-booking-form/submit-booking-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/submit-booking-form/submit-booking-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"submit_container\" >\r\n  <div class=\"submit_top\">\r\n\r\n    <button class=\"submit_top_close\" (click)=\"closeSubmit()\">Close</button>\r\n    <button class=\"submit_top_Submit\" (click)=\"submitBooking()\">Submit</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"submit_content\">\r\n    <div class=\"submit_content_userinfo\">\r\n      <div class=\"submit_content_userinfo_icon\">\r\n        <div>TS</div>\r\n      </div>\r\n      <div class=\"submit_content_userinfo_Info\">\r\n          <div>\r\n            <span *ngIf=\"userInfoChange\" class=\"submit_content_userinfo_Info_Username\">{{Username.username}}</span>\r\n            <input type=\"text\" [(ngModel)]=\"Username.username\" *ngIf=\"!userInfoChange\"><br>\r\n            <span *ngIf=\"userInfoChange\">{{Username.phoneNumber}}</span>\r\n            <input type=\"text\"  [(ngModel)]=\"Username.phoneNumber\"  *ngIf=\"!userInfoChange\">\r\n          </div>\r\n      </div>\r\n      <div class=\"submit_content_userinfo_button\" (click)=\"editUserInfo()\">\r\n        <span >{{userInfoChangeButtonText}}</span>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"submit_content_title\">  Booking Info</div>\r\n\r\n    <ul class=\"submit_content_bookinginfo\">\r\n      <li class=\"submit_date btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\r\n        <label ngbButtonLabel class=\"btn-primary\" *ngFor=\"let i of dayNumber\"  >\r\n          <input ngbButton type=\"radio\" [value]=\"today+(1000*3600*24*i)|date:'yyyMMdd'\" value=\"today+(1000*3600*24*i)|date:'yyyMMdd'\" (click)=\"chooseDate(i)\"> {{today+(1000*3600*24*i)|date:'E'}}\r\n        </label>\r\n      </li>\r\n      <li>\r\n        <div class=\"submit_time\">\r\n          <label >Time: </label>\r\n          <select name=\"time-select\" class=\"submit-time-select\" id=\"submit-time-select\"  (change)=\"chooseTime()\" >\r\n            <option *ngFor=\"let time of timeNumber\"  value={{time}} >{{time+': 00'}}--{{time+1+': 00'}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"submit_time\">\r\n          <label >PeopleNum: </label>\r\n          <select name=\"time-select\" class=\"people-number\" id=\"people-select\"  (change)=\"choosePeople()\" >\r\n            <option *ngFor=\"let number of peopleNumber\"  value={{number}}>{{number}}</option>\r\n          </select>\r\n        </div>\r\n      </li>\r\n\r\n      <li>\r\n        <label >Table: </label>\r\n        <div class=\"submit-table btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"chooseTable\">\r\n          <label ngbButtonLabel class=\"btn-primary\" *ngFor=\"let tableNumber of availableTable\"  >\r\n            <input ngbButton type=\"radio\" [value]=\"tableNumber\"> {{tableNumber}}\r\n          </label>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n\r\n\r\n    </ul>\r\n\r\n    <div class=\"submit_content_title\">  Message</div>\r\n\r\n    <div class=\"submit_content_message\">\r\n      <textarea id=\"submit_message\" placeholder=\"Input your message here!\"></textarea>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

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
            username: 'aba',
            phoneNumber: '123123'
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
            username: this.Username.username,
            customer: this.Username.phoneNumber,
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

module.exports = ".date-container{\r\n  display: flex;\r\n\r\n}\r\n\r\n/*css for date picker*/\r\n\r\n.date-select-container{\r\n  text-align: center;\r\n  line-height: 18px;\r\n  background-color: #252b30;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  padding: 0 20px;\r\n}\r\n\r\n.date-select-container:hover span{\r\n  color:  rgba(31, 249, 14, 0.79);\r\n}\r\n\r\n.date-container-month{\r\n  font-size: 10px;\r\n  color: white;\r\n}\r\n\r\n.date-container-day{\r\n  font-size: 14px;\r\n  color: white;\r\n}\r\n\r\n.date-click{\r\n  color: rgba(31, 249, 14, 0.79);\r\n}\r\n\r\n/*css for time picker*/\r\n\r\n.time-select-container{\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 20px;\r\n}\r\n\r\n.time-select-container .time-select{\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #252b30;\r\n  border: none;\r\n  color: rgba(31, 249, 14, 0.79);\r\n  font-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/head-banner/data-picker/data-picker.component.html":
/*!********************************************************************!*\
  !*** ./src/app/head-banner/data-picker/data-picker.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-container\">\r\n  <div class=\"time-select-container\">\r\n    <select name=\"time-select\" class=\"time-select\" id=\"time-select\"  (change)=\"chooseTime()\" >\r\n      <option *ngFor=\"let time of timeNumber\"  value={{time}} >{{time+': 00'}}--{{time+1+': 00'}}</option>\r\n    </select>\r\n  </div>\r\n  <div *ngFor=\"let i of dayNumber\"  class=\"date-select\" >\r\n\r\n    <div class=\"date-select-container\" (click)=\"chooseDate(i)\">\r\n      <span class=\"date-container-month\">{{today+(1000*3600*24*i)|date:'MMM dd'}}</span><br>\r\n      <span class=\"date-container-day\">{{today+(1000*3600*24*i)|date:'E'}}</span>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".head-banner-container{\r\n  margin: auto;\r\n  background-color: #364248;\r\n  display: flex;\r\n  width: 1240px;\r\n  height: 80px;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n}\r\n.head-banner-container .banner-icon{\r\n  flex: 0.5 50px;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n\r\n}\r\n.banner-icon img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 40px;\r\n  width: 40px;\r\n\r\n}\r\n.app-data-picker{\r\n  flex:5 300px;\r\n}\r\n。app-data-picker-title{\r\n  flex:5 300px;\r\n  margin-left: 100px;\r\n}\r\n.Book-btn{\r\n  flex: 0.5 150px;\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  transition: 1s;\r\n  width: 120px;\r\n  margin-right: 30px;\r\n}\r\n.Book-btn:hover {\r\n  opacity: 1;\r\n  color: lightgray;\r\n  transition: 1s;\r\n}\r\n.Book-btn span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n}\r\n.Book-btn span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -10px;\r\n  transition: 0.5s;\r\n\r\n}\r\n.Book-btn:hover span {\r\n  padding-right: 15px;\r\n}\r\n.button:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n.Book-btn:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n.Book-btn:active {\r\n  background-color: #3e8e41;\r\n  box-shadow: 0 5px #666;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n.banner-icon img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n\r\n}\r\n.btn-outline-primary img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\na{\r\n  cursor: pointer;\r\n}\r\n#dropdownBasic1{\r\n  border:none\r\n}\r\n#dropdownBasic1:after{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/head-banner/head-banner.component.html":
/*!********************************************************!*\
  !*** ./src/app/head-banner/head-banner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner-container\">\r\n\r\n  <div class=\"col\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><img src=\"../../assets/icons/menu-icon.png\" alt=\"\"></button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n        <a class=\"dropdown-item\" routerLink=\"/Booksystem\">Booking System</a>\r\n        <a class=\"dropdown-item\" routerLink=\"/Menu\">Menu</a>\r\n        <a class=\"dropdown-item\" routerLink=\"/BookList\">My BookingList</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\">Login out</a>\r\n      </div>\r\n    </div>\r\n    <a class=\"banner-icon\" routerLink=\"/HomePage\"><img src=\"../../assets/icons/homepage-icon.png\" alt=\"\"></a>\r\n\r\n  </div>\r\n  <span>\r\n      <div class=\"app-data-picker-title\"></div>\r\n\r\n      <app-data-picker class=\"app-data-picker\"></app-data-picker>\r\n\r\n  </span>\r\n  <button class=\"Book-btn\" (click)=\"changeSubmit()\"><span>Booking</span></button>\r\n</div>\r\n"

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
    BookinglistService.prototype.getHistoryBookByUserName = function (postData) {
        var URI = this.serverAPI + "/booklist/getHistoryListbyUserName";
        var body = postData;
        return this.http.post(URI, body, { headers: this.headers });
    };
    BookinglistService.prototype.getCurrentListbyUserName = function (postData) {
        var URI = this.serverAPI + "/booklist/getCurrentListbyUserName";
        var body = postData;
        return this.http.post(URI, body, { headers: this.headers });
    };
    BookinglistService.prototype.addNewBooking = function (newBooking) {
        var URI = this.serverAPI + "/booklist/addNewBooking";
        var body = newBooking;
        return this.http.post(URI, body, { headers: this.headers });
    };
    BookinglistService.prototype.deleteBooking = function (postData) {
        var URI = this.serverAPI + "/booklist/deleteBookList";
        var body = postData;
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
    TablelistService.prototype.deleteBookTimeForTable = function (postData) {
        var URI = this.serverAPI + "/tablelist/deleteBooktime";
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

module.exports = ".restaurant-map-container{\r\n\r\n  box-sizing: border-box;\r\n  width: 1240px;\r\n  height: 660px;\r\n  border: 2px solid lightslategray;\r\n  margin: auto;\r\n  position: relative;\r\n\r\n}\r\n\r\n.picker{\r\n  text-align: center;\r\n}\r\n\r\n.live-kitchen{\r\n  position: absolute;\r\n  height: 300px;\r\n  width: 150px;\r\n  border: 2px solid lightslategray;\r\n  border-left: 0px;\r\n  top: 220px;\r\n}\r\n\r\n.entrance{\r\n  position: absolute;\r\n  height: 100px;\r\n  width: 80px;\r\n  border: 2px solid lightslategray;\r\n  border-left: 0px;\r\n  border-right: 0px;\r\n  top: 20px;\r\n}\r\n\r\n.live-kitchen p, .entrance p {\r\n  color: lightslategray;\r\n  text-align: center;\r\n}\r\n\r\n.live-kitchen p{\r\n\r\n  line-height: 250px;\r\n}\r\n\r\n.entrance p {\r\n  line-height: 60px;\r\n}\r\n\r\n/*Css for square-table-1  */\r\n\r\n.square-table-map-container{\r\n  position: absolute;\r\n  width: 1000px;\r\n  right: 0px;\r\n  top: 30px;\r\n\r\n  /*display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;*/\r\n}\r\n\r\n.square-table-container-1{\r\n  width: 900px;\r\n  height: 140px;\r\n  margin-left: 80px;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n.square-table{\r\n  width: 140px;\r\n  height: 140px;\r\n  float: left;\r\n  margin: 10px 5px;\r\n}\r\n\r\n/*Css for circle-table  */\r\n\r\n.circle-table-map-container{\r\n\r\n  position: absolute;\r\n  width: 1000px;\r\n  height: 260px;\r\n  top:400px;\r\n  right: 0px;\r\n\r\n}\r\n\r\n.circle-table-container-1{\r\n  width: 900px;\r\n  height: 260px;\r\n  margin-left: 120px;\r\n\r\n}\r\n\r\n.circle-table-map-container .circle-table-container-1 .circle-table {\r\n  float: left;\r\n  margin: 10px 60px;\r\n}\r\n\r\n/* css for booking form*/\r\n\r\n.submit-booking-form{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0px;\r\n  width: 500px;\r\n  height: 600px;\r\n}\r\n\r\n.submit_form_State{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/table-map/table-map.component.html":
/*!****************************************************!*\
  !*** ./src/app/table-map/table-map.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"restaurant-map-container\">\r\n  <div class=\"entrance\"><p>Entrance</p></div>\r\n  <div class=\"live-kitchen\"><p>Live kitchen</p></div>\r\n\r\n\r\n\r\n  <div class=\"square-table-map-container\" >\r\n    <div class=\"square-table-container-1\" (click)=\"changeSubmitState()\" >\r\n    <app-square-table class=\"square-table\"  *ngFor=\"let tableInfo of allSmallTables\" [tableNumber]=\"tableInfo['tableNumber']\" [unAvailable]=\"unAvailableTables\"></app-square-table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"circle-table-map-container\">\r\n    <div class=\"circle-table-container-1\" (click)=\"changeSubmitState()\">\r\n      <app-circle-table class=\"circle-table\" *ngFor=\"let tableInfo of allBigTables\" [tableNumber]=\"tableInfo['tableNumber']\" [unAvailable]=\"unAvailableTables\" ></app-circle-table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"submit-booking-form\" [ngClass]=\"{'submit_form_State' : submitFormState}\">\r\n    <app-submit-booking-form ></app-submit-booking-form>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

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

module.exports = ".circle-table-container{\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  left: 100px;\r\n  top: 100px;\r\n  padding: 20px;\r\n}\r\n\r\n.circle-table{\r\n  position:relative;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  height: 120px;\r\n  border: 1.5px solid lightslategray;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle-table-1{\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 45px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.circle-table-2{\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 45px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.circle-table-3{\r\n  position: absolute;\r\n  top: 55px;\r\n  left: -25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.circle-table-4{\r\n  position: absolute;\r\n  top: 55px;\r\n  right: -25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.circle-table-5{\r\n  position: absolute;\r\n  top: 5px;\r\n  right: -2px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n.circle-table-6{\r\n  position: absolute;\r\n  top: 110px;\r\n  right: -2px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n.circle-table-7{\r\n  position: absolute;\r\n  top: 5px;\r\n  left: -5px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n.circle-table-8{\r\n  position: absolute;\r\n  top: 110px;\r\n  left: -5px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n.circle-table:hover {\r\n  background-color: lightslategray;\r\n  transition: 0.5s;\r\n}\r\n\r\n.circle-table span{\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 50px;\r\n}\r\n\r\n.table_unavailable {\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  background-color: darkorange;\r\n}\r\n\r\n.submit_form_State{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tableType/circle-table/circle-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/circle-table/circle-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circle-table-container\">\r\n\r\n  <div class=\"circle-table\"  [ngClass]=\"{table_unavailable : tableUnavailable}\">\r\n    <span>  {{tableNumber}}</span>\r\n    <div class=\"circle-table-1\"></div>\r\n    <div class=\"circle-table-2\"></div>\r\n    <div class=\"circle-table-3\"></div>\r\n    <div class=\"circle-table-4\"></div>\r\n    <div class=\"circle-table-5\"></div>\r\n    <div class=\"circle-table-6\"></div>\r\n    <div class=\"circle-table-7\"></div>\r\n    <div class=\"circle-table-8\"></div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".square-table-container{\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  left: 100px;\r\n  top: 100px;\r\n  padding: 20px;\r\n}\r\n\r\n.square-table{\r\n  position: relative;\r\n  cursor: pointer;\r\n  width: 80px;\r\n  height: 80px;\r\n  border: 1.5px solid lightslategray;\r\n  ;\r\n\r\n}\r\n\r\n.square-table-desk-up{\r\n  position: absolute;\r\n  top: -18px;\r\n  left: 25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.square-table-desk-down{\r\n  position: absolute;\r\n  bottom: -16px;\r\n  left: 25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table-desk-left{\r\n  position: absolute;\r\n  top: 25px;\r\n  left: -20px;\r\n  width:  8px;\r\n  height: 25px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table-desk-right{\r\n  position: absolute;\r\n  top: 25px;\r\n  right: -20px;\r\n  width:  8px;\r\n  height: 25px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table:hover {\r\n  background-color: lightslategray;\r\n  transition: 0.5s;\r\n}\r\n\r\n.square-table span{\r\n  position: absolute;\r\n  top: 30px ;\r\n  left: 30px;\r\n}\r\n\r\n.table_unavailable {\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  background-color: darkorange;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tableType/square-table/square-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/square-table/square-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"square-table-container\">\r\n\r\n      <div class=\"square-table\" [ngClass]=\"{table_unavailable : tableUnavailable}\" (click)=\"onclick()\" >\r\n        <span>{{tableNumber}}</span>\r\n        <div class=\"square-table-desk-up\"></div>\r\n        <div class=\"square-table-desk-down\"></div>\r\n        <div class=\"square-table-desk-left\"></div>\r\n        <div class=\"square-table-desk-right\"></div>\r\n      </div>\r\n</div>\r\n"

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

/***/ "./src/app/views/book-list-page/book-list-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/book-list-page/book-list-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/book-list-page/book-list-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/book-list-page/book-list-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-frame-top>\r\n  <app-frame-top-nav></app-frame-top-nav>\r\n</app-frame-top>\r\n\r\n<app-frame-bottom >\r\n    <app-content-booklist></app-content-booklist>\r\n</app-frame-bottom>\r\n"

/***/ }),

/***/ "./src/app/views/book-list-page/book-list-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/book-list-page/book-list-page.component.ts ***!
  \******************************************************************/
/*! exports provided: BookListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListPageComponent", function() { return BookListPageComponent; });
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

var BookListPageComponent = /** @class */ (function () {
    function BookListPageComponent() {
    }
    BookListPageComponent.prototype.ngOnInit = function () {
    };
    BookListPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list-page',
            template: __webpack_require__(/*! ./book-list-page.component.html */ "./src/app/views/book-list-page/book-list-page.component.html"),
            styles: [__webpack_require__(/*! ./book-list-page.component.css */ "./src/app/views/book-list-page/book-list-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookListPageComponent);
    return BookListPageComponent;
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

module.exports = "<app-head-banner></app-head-banner>\r\n<app-table-map class=\"row\"></app-table-map>\r\n\r\n<!--<p><a [routerLink]=\"['/login']\">Logout</a></p>-->\r\n"

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

/***/ "./src/app/views/main-page/main-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/main-page/main-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/views/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-frame-top>\r\n    <h1>Weclome to XXXX</h1>\r\n</app-frame-top>\r\n\r\n<app-frame-bottom >\r\n  <app-content-mainpage></app-content-mainpage>\r\n</app-frame-bottom>\r\n"

/***/ }),

/***/ "./src/app/views/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
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

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/views/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/views/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/views/menu-page/menu-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/menu-page/menu-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/menu-page/menu-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/menu-page/menu-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-frame-top>\r\n  <app-frame-top-nav></app-frame-top-nav>\r\n</app-frame-top>\r\n\r\n<app-frame-bottom >\r\n  <app-content-menu></app-content-menu>\r\n</app-frame-bottom>\r\n"

/***/ }),

/***/ "./src/app/views/menu-page/menu-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/menu-page/menu-page.component.ts ***!
  \********************************************************/
/*! exports provided: MenuPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function() { return MenuPageComponent; });
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

var MenuPageComponent = /** @class */ (function () {
    function MenuPageComponent() {
    }
    MenuPageComponent.prototype.ngOnInit = function () {
    };
    MenuPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-page',
            template: __webpack_require__(/*! ./menu-page.component.html */ "./src/app/views/menu-page/menu-page.component.html"),
            styles: [__webpack_require__(/*! ./menu-page.component.css */ "./src/app/views/menu-page/menu-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuPageComponent);
    return MenuPageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\allon\OneDrive\Documents\uts\semester4\advance IP\project\angular\-FF\angular_src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map