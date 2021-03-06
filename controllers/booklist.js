const express = require('express');
const router = express.Router();
const bookList = require('../models/booklist');

//GET HTTP method to /table
router.get('/', (req, res) => {
    bookList.getAllBookingList((err, booklist) => {
        if (err) {
            res.json({success: false, message: `Failed to load all booking. Error: ${err}`})
        } else {
            res.write(JSON.stringify({success: true, booklists: booklist}, null, 2));
            res.end();
        }
    })
});

router.post('/getHistoryListbyUserName', (req, res, next) => {
    let userInfo = {
        username: req.body.username,
        bookingTime: req.body.bookingTime
    }
    bookList.getHistoryListbyUserName(userInfo, (err, booklists) => {
        if (err) {
            res.json({success: false, message: `Failed to get the booking. Error: ${err}`})
        } else {
            res.write(JSON.stringify({success: true, booklists: booklists}, null, 2));
            res.end();
        }
    });
});

router.post('/getCurrentListbyUserName', (req, res, next) => {
    let userInfo = {
        username: req.body.username,
        bookingTime: req.body.bookingTime
    }

    bookList.getCurrentListbyUserName(userInfo, (err, booklists) => {
        if (err) {
            res.json({success: false, message: `Failed to get the booking. Error: ${err}`})
        } else {
            res.write(JSON.stringify({success: true, booklists: booklists}, null, 2));
            res.end();
        }
    });
});

router.post('/addNewBooking', (req, res, next) => {
    let newBooking = new bookList({
        username: req.body.username,
        customer: req.body.customer,
        bookingTime: req.body.bookingTime,
        phoneNumber: req.body.phoneNumber,
        peopleNumber: req.body.peopleNumber,
        tableNumber: req.body.tableNumber,
        message: req.body.message
    });

    bookList.addNewBooking(newBooking, (err, response) => {
        if (err) {
            res.json({success: false, message: `Failed to create a new booking. Error: ${err}`})
        } else {
            res.json({success: true, message: "Booking Added successfully."});
        }
    });

});


router.post('/getBookingListByUserName', (req, res, next) => {
    let userInfo = {
        username: req.body.username,
    }

    bookList.getBookingListByUserName(userInfo, (err, booklists) => {
        if (err) {
            res.json({success: false, message: `Failed to get the booking. Error: ${err}`})
        } else {
            res.write(JSON.stringify({success: true, booklists: booklists}, null, 2));
            res.end();
        }
    });
});

// delete bookinglist
router.post('/deleteBookList', (req, res, next) => {
    let userInfo = {
        username: req.body.username,
        bookingTime: req.body.bookingTime,
        tableNumber: req.body.tableNumber
    }

    bookList.deleteBookList(userInfo, (err, booklists) => {
        if (err) {
            res.json({success: false, message: `Failed to get the booking. Error: ${err}`})
        } else {
            res.json({success: true, message: "Booking deleted successfully."});
        }
    });
});


module.exports = router;