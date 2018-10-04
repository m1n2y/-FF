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

module.exports = "<div *ngIf=\"message\" ngClass=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n      {{message.text}}\r\n</div>\r\n"

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

module.exports = "<!--\\\\<link href=\"//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" />-->\r\n\r\n\r\n<h2>Login</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n      </div>\r\n</form>\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../~services/authentication.service */ "./src/app/Login_register/~services/authentication.service.ts");
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
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
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
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
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
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
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
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
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

module.exports = "\r\n<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n          <label for=\"firstName\">First Name</label>\r\n          <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n          <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"lastName\">Last Name</label>\r\n          <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n          <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n          <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n      </div>\r\n</form>\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../~services/user.service */ "./src/app/Login_register/~services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
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
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
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
    }
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
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
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
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");






var appRoutes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], canActivate: [_Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'usermanagement', component: _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'login', component: _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 offset-sm-3\">\r\n        <app-alert></app-alert>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _data_picker_data_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-picker/data-picker.component */ "./src/app/data-picker/data-picker.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _head_banner_head_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./head-banner/head-banner.component */ "./src/app/head-banner/head-banner.component.ts");
/* harmony import */ var _table_map_table_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-map/table-map.component */ "./src/app/table-map/table-map.component.ts");
/* harmony import */ var _tableType_square_table_square_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tableType/square-table/square-table.component */ "./src/app/tableType/square-table/square-table.component.ts");
/* harmony import */ var _tableType_circle_table_circle_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tableType/circle-table/circle-table.component */ "./src/app/tableType/circle-table/circle-table.component.ts");
/* harmony import */ var _Login_register_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login_register/alert/alert.component */ "./src/app/Login_register/alert/alert.component.ts");
/* harmony import */ var _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Login_register/home/home.component */ "./src/app/Login_register/home/home.component.ts");
/* harmony import */ var _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Login_register/login/login.component */ "./src/app/Login_register/login/login.component.ts");
/* harmony import */ var _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Login_register/register/register.component */ "./src/app/Login_register/register/register.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _Login_register_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Login_register/~helpers/fake-backend */ "./src/app/Login_register/~helpers/fake-backend.ts");
/* harmony import */ var _Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Login_register/~guards/auth.guard */ "./src/app/Login_register/~guards/auth.guard.ts");
/* harmony import */ var _Login_register_services_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login_register/~services/alert.service */ "./src/app/Login_register/~services/alert.service.ts");
/* harmony import */ var _Login_register_services_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Login_register/~services/authentication.service */ "./src/app/Login_register/~services/authentication.service.ts");
/* harmony import */ var _Login_register_services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Login_register/~services/user.service */ "./src/app/Login_register/~services/user.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Login_register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Login_register/~helpers/jwt.interceptor */ "./src/app/Login_register/~helpers/jwt.interceptor.ts");
/* harmony import */ var _Login_register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Login_register/~helpers/error.interceptor */ "./src/app/Login_register/~helpers/error.interceptor.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
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
                _data_picker_data_picker_component__WEBPACK_IMPORTED_MODULE_5__["DataPickerComponent"],
                _head_banner_head_banner_component__WEBPACK_IMPORTED_MODULE_8__["HeadBannerComponent"],
                _table_map_table_map_component__WEBPACK_IMPORTED_MODULE_9__["TableMapComponent"],
                _tableType_square_table_square_table_component__WEBPACK_IMPORTED_MODULE_10__["SquareTableComponent"],
                _tableType_circle_table_circle_table_component__WEBPACK_IMPORTED_MODULE_11__["CircleTableComponent"],
                _Login_register_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _Login_register_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _Login_register_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _Login_register_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_25__["HomepageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_7__["MyDatePickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["routing"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]
            ],
            providers: [
                _Login_register_guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _Login_register_services_alert_service__WEBPACK_IMPORTED_MODULE_19__["AlertService"],
                _Login_register_services_authentication_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticationService"],
                _Login_register_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _Login_register_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _Login_register_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _Login_register_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_17__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-picker/data-picker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/data-picker/data-picker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  box-sizing: border-box;\r\n}\r\n\r\n.date-picker-container{\r\n  display: flex;\r\n  width: 500px;\r\n  height: 40px;\r\n  align-items: flex-end;\r\n}\r\n\r\n.date-picker{\r\n  margin: 0 20px;\r\n}\r\n\r\n#date-picker{\r\n  height: 40px;\r\n}\r\n\r\n#time-picker{\r\n  padding: auto;\r\n  border-radius: 10px;\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/data-picker/data-picker.component.html":
/*!********************************************************!*\
  !*** ./src/app/data-picker/data-picker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-picker-container\">\r\n<my-date-picker class=\"date-picker\" id=\"date-picker\" [options]=\"myDatePickerOptions\"\r\n                (dateChanged)=\"onInputFieldChanged($event)\"\r\n                [selDate]=\"\"></my-date-picker>\r\n\r\n<input class=\"date-picker\" id=\"time-picker\" type=\"time\" >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/data-picker/data-picker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/data-picker/data-picker.component.ts ***!
  \******************************************************/
/*! exports provided: DataPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPickerComponent", function() { return DataPickerComponent; });
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

var DataPickerComponent = /** @class */ (function () {
    function DataPickerComponent() {
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            width: '180px',
            height: '35px',
            padding: '10px'
        };
    }
    DataPickerComponent.prototype.ngOnInit = function () {
    };
    DataPickerComponent.prototype.onInputFieldChanged = function (event) {
        console.log(event.date);
    };
    DataPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-picker',
            template: __webpack_require__(/*! ./data-picker.component.html */ "./src/app/data-picker/data-picker.component.html"),
            styles: [__webpack_require__(/*! ./data-picker.component.css */ "./src/app/data-picker/data-picker.component.css")]
        })
        // It is a data picker component use for booking specified time in home page header
        // It is a sub component of head-banner
        ,
        __metadata("design:paramtypes", [])
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

module.exports = ".head-banner-container{\r\n  margin: auto;\r\n  background-color: lightslategray;\r\n  display: flex;\r\n  width: 1240px;\r\n  height: 80px;\r\n  flex-flow: row nowrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n}\r\n.head-banner-container .banner-icon{\r\n  flex: 0.5 50px;\r\n  height: 50px;\r\n  width: 50px;\r\n\r\n\r\n}\r\n.banner-icon img{\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  height: 40px;\r\n  width: 40px;\r\n\r\n}\r\n.app-data-picker{\r\n  flex:5 300px;\r\n}\r\n。app-data-picker-title{\r\n  flex:5 300px;\r\n  margin-left: 100px;\r\n}\r\n.Book-btn{\r\n  flex: 0.5 150px;\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 25px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px 2px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  transition: 1s;\r\n  width: 120px;\r\n  margin-right: 30px;\r\n}\r\n.Book-btn:hover {\r\n  opacity: 1;\r\n  color: lightgray;\r\n  transition: 1s;\r\n}\r\n.Book-btn span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n}\r\n.Book-btn span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -10px;\r\n  transition: 0.5s;\r\n\r\n}\r\n.Book-btn:hover span {\r\n  padding-right: 15px;\r\n}\r\n.button:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n.Book-btn:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n.Book-btn:active {\r\n  background-color: #3e8e41;\r\n  box-shadow: 0 5px #666;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/head-banner/head-banner.component.html":
/*!********************************************************!*\
  !*** ./src/app/head-banner/head-banner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-banner-container\">\r\n\r\n      <div class=\"banner-icon\"><img src=\"../../assets/icons/menu-icon.png\" alt=\"\"></div>\r\n\r\n      <div class=\"banner-icon\"><img src=\"../../assets/icons/homepage-icon.png\" alt=\"\"></div>\r\n\r\n\r\n  <span>\r\n      <div class=\"app-data-picker-title\">   Choose your booking slot</div>\r\n\r\n      <app-data-picker class=\"app-data-picker\"></app-data-picker>\r\n\r\n  </span>\r\n  <button class=\"Book-btn\"><span>Booking</span></button>\r\n</div>\r\n"

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
    function HeadBannerComponent() {
    }
    HeadBannerComponent.prototype.ngOnInit = function () {
    };
    HeadBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-head-banner',
            template: __webpack_require__(/*! ./head-banner.component.html */ "./src/app/head-banner/head-banner.component.html"),
            styles: [__webpack_require__(/*! ./head-banner.component.css */ "./src/app/head-banner/head-banner.component.css")]
        })
        // header component in home page
        ,
        __metadata("design:paramtypes", [])
    ], HeadBannerComponent);
    return HeadBannerComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-head-banner></app-head-banner>\r\n  <app-table-map></app-table-map>\r\n</div>\r\n<p><a [routerLink]=\"['/login']\">Logout</a></p>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
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
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/table-map/table-map.component.css":
/*!***************************************************!*\
  !*** ./src/app/table-map/table-map.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".restaurant-map-container{\r\n\r\n  box-sizing: border-box;\r\n  width: 1240px;\r\n  height: 660px;\r\n  border: 2px solid lightslategray;\r\n  margin: auto;\r\n  position: relative;\r\n\r\n}\r\n\r\n.live-kitchen{\r\n  position: absolute;\r\n  height: 300px;\r\n  width: 150px;\r\n  border: 2px solid lightslategray;\r\n  border-left: 0px;\r\n  top: 220px;\r\n}\r\n\r\n.entrance{\r\n  position: absolute;\r\n  height: 100px;\r\n  width: 80px;\r\n  border: 2px solid lightslategray;\r\n  border-left: 0px;\r\n  border-right: 0px;\r\n  top: 20px;\r\n}\r\n\r\n.live-kitchen p, .entrance p {\r\n  color: lightslategray;\r\n  text-align: center;\r\n}\r\n\r\n.live-kitchen p{\r\n\r\n  line-height: 250px;\r\n}\r\n\r\n.entrance p {\r\n  line-height: 60px;\r\n}\r\n\r\n/*Css for square-table-1  */\r\n\r\n.square-table-map-container{\r\n  position: absolute;\r\n  width: 1000px;\r\n  height: 400px;\r\n  right: 0px;\r\n  top: 30px;\r\n\r\n  /*display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-around;*/\r\n}\r\n\r\n.square-table-container-1{\r\n  width: 900px;\r\n  height: 140px;\r\n  margin-left: 80px;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n.square-table{\r\n  width: 140px;\r\n  height: 140px;\r\n  float: left;\r\n  margin: 10px 5px;\r\n}\r\n\r\n/*Css for circle-table  */\r\n\r\n.circle-table-map-container{\r\n\r\n  position: absolute;\r\n  width: 1000px;\r\n  height: 260px;\r\n  top:400px;\r\n  right: 0px;\r\n\r\n}\r\n\r\n.circle-table-container-1{\r\n  width: 900px;\r\n  height: 260px;\r\n  margin-left: 120px;\r\n\r\n}\r\n\r\n.circle-table-map-container .circle-table-container-1 .circle-table {\r\n  float: left;\r\n  margin: 10px 60px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/table-map/table-map.component.html":
/*!****************************************************!*\
  !*** ./src/app/table-map/table-map.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"restaurant-map-container\">\r\n  <div class=\"entrance\"><p>Entrance</p></div>\r\n  <div class=\"live-kitchen\"><p>Live kitchen</p></div>\r\n  <div class=\"square-table-map-container\" >\r\n    <div class=\"square-table-container-1\">\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n    <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n      <app-square-table class=\"square-table\"></app-square-table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"circle-table-map-container\">\r\n    <div class=\"circle-table-container-1\">\r\n      <app-circle-table class=\"circle-table\"></app-circle-table>\r\n      <app-circle-table class=\"circle-table\"></app-circle-table>\r\n      <app-circle-table class=\"circle-table\"></app-circle-table>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

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
    function TableMapComponent() {
    }
    TableMapComponent.prototype.ngOnInit = function () {
    };
    TableMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-map',
            template: __webpack_require__(/*! ./table-map.component.html */ "./src/app/table-map/table-map.component.html"),
            styles: [__webpack_require__(/*! ./table-map.component.css */ "./src/app/table-map/table-map.component.css")]
        })
        // this component is use for demonstrate table map of restaurant in home page
        ,
        __metadata("design:paramtypes", [])
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

module.exports = ".circle-table-container{\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  left: 100px;\r\n  top: 100px;\r\n  padding: 20px;\r\n}\r\n\r\n.circle-table{\r\n  position:relative;\r\n  cursor: pointer;\r\n  width: 120px;\r\n  height: 120px;\r\n  border: 1.5px solid lightslategray;\r\n  border-radius: 50%;\r\n}\r\n\r\n.circle-table-1{\r\n  position: absolute;\r\n  top: -15px;\r\n  left: 45px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.circle-table-2{\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 45px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.circle-table-3{\r\n  position: absolute;\r\n  top: 55px;\r\n  left: -25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.circle-table-4{\r\n  position: absolute;\r\n  top: 55px;\r\n  right: -25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.circle-table-5{\r\n  position: absolute;\r\n  top: 5px;\r\n  right: -2px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n.circle-table-6{\r\n  position: absolute;\r\n  top: 110px;\r\n  right: -2px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n.circle-table-7{\r\n  position: absolute;\r\n  top: 5px;\r\n  left: -5px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n}\r\n\r\n.circle-table-8{\r\n  position: absolute;\r\n  top: 110px;\r\n  left: -5px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n}\r\n\r\n.circle-table:hover {\r\n  background-color: lightslategray;\r\n  transition: 0.5s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tableType/circle-table/circle-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/circle-table/circle-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circle-table-container\">\r\n\r\n  <div class=\"circle-table\" >\r\n    <div class=\"circle-table-1\"></div>\r\n    <div class=\"circle-table-2\"></div>\r\n    <div class=\"circle-table-3\"></div>\r\n    <div class=\"circle-table-4\"></div>\r\n    <div class=\"circle-table-5\"></div>\r\n    <div class=\"circle-table-6\"></div>\r\n    <div class=\"circle-table-7\"></div>\r\n    <div class=\"circle-table-8\"></div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = ".square-table-container{\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  left: 100px;\r\n  top: 100px;\r\n  padding: 20px;\r\n}\r\n\r\n.square-table{\r\n  cursor: pointer;\r\n  width: 80px;\r\n  height: 80px;\r\n  border: 1.5px solid lightslategray;\r\n  ;\r\n\r\n}\r\n\r\n.square-table-desk-up{\r\n  position: relative;\r\n  top: -15px;\r\n  left: 25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n}\r\n\r\n.square-table-desk-down{\r\n  position: relative;\r\n  bottom: -76px;\r\n  left: 25px;\r\n  width:  25px;\r\n  height: 8px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table-desk-left{\r\n  position: relative;\r\n  top: 5px;\r\n  left: -16px;\r\n  width:  8px;\r\n  height: 25px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table-desk-right{\r\n  position: relative;\r\n  top: -22px;\r\n  left: 85px;\r\n  width:  8px;\r\n  height: 25px;\r\n  border: 1px solid darkgray;\r\n\r\n}\r\n\r\n.square-table:hover {\r\n  background-color: lightslategray;\r\n  transition: 0.5s;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tableType/square-table/square-table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tableType/square-table/square-table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"square-table-container\">\r\n\r\n      <div class=\"square-table\" >\r\n        <div class=\"square-table-desk-up\"></div>\r\n        <div class=\"square-table-desk-down\"></div>\r\n        <div class=\"square-table-desk-left\"></div>\r\n        <div class=\"square-table-desk-right\"></div>\r\n      </div>\r\n</div>\r\n"

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

module.exports = __webpack_require__(/*! C:\Users\Allon Cai\Code\Project\allon\-FF\angular_src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map