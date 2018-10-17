# Restaurant booking system
This is a booking system for small restaurant busniess.
The key functions is the customers can login in and book tables online.

## How to Run
Run `npm install`. 
 
Run `npm start` for a dev server.

Run `cd angular_src`  

Run `npm install` 

Run `ng build` to build the project.  

Then the website will run on `localhost:3000`

## Techonolies
	+ front-end: Angular2
	+ back-end: Node.js 
	+ database: Mongo DB
	
## Collections

* User collection
````json
{
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
}
````
* Table collection
````json
{
  tableNumber: string,
  tableType: string,
  booktimeList: Array[number]
}
````
* BookingList collection
````json
{
  username: string,
  customer: string,
  bookingTime: number,
  phoneNumber: string,
  peopleNumber: number,
  tableNumber: string,
  message: string
}
````

