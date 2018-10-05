//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const tableList = require('../models/table');



//GET HTTP method to /table
router.get('/',(req,res) => {

    tableList.getAllTable((err,tables)=>{
        if(err){
            res.json({success: false, message:`Failed to load all users. Error: ${err}`})
        }else {
            res.write(JSON.stringify({success: true, tables:tables},null,2));
            res.end();
        }
    })

});

//GET HTTP method to get all small tables
router.get('/getsmalltables',(req,res) => {

    tableList.getAllSmallTables((err,tables)=>{
        if(err){
            res.json({success: false, message:`Failed to load all users. Error: ${err}`})
        }else {
            res.write(JSON.stringify({success: true, tables:tables},null,2));
            res.end();
        }
    })

});

//GET HTTP method to get all big tables
router.get('/getbigtables',(req,res) => {

    tableList.getAllBigTables((err,tables)=>{
        if(err){
            res.json({success: false, message:`Failed to load all users. Error: ${err}`})
        }else {
            res.write(JSON.stringify({success: true, tables:tables},null,2));
            res.end();
        }
    })

});





router.post('/', (req,res,next) => {
    let newTable = new tableList({
        tableNumber: req.body.tableNumber,
        tableType: req.body.tableType,
        booktimeList: req.body.booktimeList,
    });

    tableList.addTable(newTable,(err,table)=>{
        if(err){
            res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
        }else {
            res.json({success:true, message: table.tableNumber+" Added successfully."});
        }
    });

});



router.post('/bookInfo', (req,res,next) => {
    let bookInfo ={
        tableNumber: req.body.tableNumber,
        booktimeList: req.body.booktimeList,
    }

    tableList.updateBooktime(bookInfo,(err,table)=>{
        if(err){
            res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
        }else {
            res.json({success:true, message: bookInfo.tableNumber+" new booking Added successfully."});
        }
    });
});


router.post('/getTableByBooktimeList', (req,res,next) => {
    let bookTime ={
        booktimeList: req.body.booktimeList,
    }

    tableList.getTableByBooktimeList(bookTime,(err,table)=>{
        if(err){
            res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
        }else {
            res.write(JSON.stringify({success: true, tables:table},null,2));
            res.end();
        }
    });
});









module.exports = router;