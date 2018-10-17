//Require mongoose package
const mongoose = require('mongoose');

const  BookingListSchema = mongoose.Schema({
    username:{ type:String ,required:true,},
    customer:{ type:String ,required:true,},
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


//Table.find() returns all the tables
module.exports.getHistoryListbyUserName = (postData,callback) => {
    let query = {"username" : postData.username,"bookingTime":{$lt:postData['bookingTime']}};

    BookingList.find(query,callback).sort("bookingTime");
}

//Table.find() returns all the tables
module.exports.getCurrentListbyUserName = (postData,callback) => {
    let query = {"username" : postData.username,"bookingTime":{$gte:postData['bookingTime']}};
    BookingList.find(query,callback).sort("bookingTime");
}



// getTable by username
module.exports.getBookingListByUserName = (postData,callback) =>{
    let query = {"username" : postData.username};
    BookingList.find(query,{_id:0},callback).sort("bookingTime");
}


// add bookingList
module.exports.addNewBooking = (newBooking, callback) => {
    newBooking.save(callback);
}

//delete bookingList
module.exports.deleteBookList = (postData, callback) => {
    let query = {
        username: postData.username,
        tableNumber: postData.tableNumber,
        bookingTime: postData.bookingTime,
    };
    BookingList.deleteOne(query, callback);
}

