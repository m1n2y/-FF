# Foodty restaurant booking system
This is a booking system for small restaurant busniess.
The key functions are below:
1. customers can view menu online
2. customers can log in and booking seats online
3. the admin user can modify the booking information

## Techonolies
	+ front-end: Angular2
	+ back-end: Node.js 
	+ database: Mongo DB
	
## Tables
````json
{
  "id": int,
  "capacity": int,
  "mincapacity": int,
  "status": int,
  "bookingtimelist": []
}
````
Divede busniess hours into time pieces and presented by unique number, then store the time piece as the booking date plus the unique number into bookingtimelist.
````json
{
  "id": int,
  "auth": int, // 1 present customer, 2 present admin
  "name": string,
  "contract": string,
}
````

# BookingSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
