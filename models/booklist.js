//Require mongoose package
const mongoose = require('mongoose');

const  BookingListSchema = mongoose.Schema({
    username:{ type:String ,required:true,},
    bookingTime:{ type:Number ,required:true,},
    phoneNumber:{ type:String ,required:true,},
    peopleNumber:{ type:Number ,required:true, },
    tableNumber:{ type:String ,required:true, },
    message:{ type:String },



});

const BookingList = module.exports = mongoose.model('BookingList',BookingListSchema);


//Table.find() returns all the tables
module.exports.getAllBookingList = (callback) => {
    BookingList.find({},callback);
}

// getTable by username
module.exports.getBookingListByUserName = (postData,callback) =>{
    let query = {"username" : postData.username};
    BookingList.find(query,{_id:0},callback);
}


// add bookingList
module.exports.addNewBooking = (newBooking, callback) => {
    newBooking.save(callback);
}


