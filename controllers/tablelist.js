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









module.exports = router;