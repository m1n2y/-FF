//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const userList = require('../models/user');

//GET HTTP method to /user
router.get('/',(req,res) => {
    userList.getAllUser((err,users)=>{
        if(err){
            res.json({success: false, message:`Failed to load all users. Error: ${err}`})
        }else {
            res.write(JSON.stringify({success: true, users:users},null,2));
            res.end();
        }
    })

});

//POST HTTP method to /user

router.post('/', (req,res,next) => {
    let newUser = new userList({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    });
    userList.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
        }else {
            res.json({success:true, message: "Added successfully."});
        }
    });
});

//DELETE HTTP method to /user. Here, we pass in a params which is the object id.
router.delete('/:username', (req,res,next)=> {
    let userName = req.params.username;
    userList.deleteListByUserName(userName,(err,user)=>{
        if(err){
            res.json({success:false, message: `Failed to delete the user. Error: ${err}`});
        }else if(user) {
            res.json({success:true, message: "Deleted successfully"});
        }else {
            res.json({success:false});
        }
    })


})

module.exports = router;