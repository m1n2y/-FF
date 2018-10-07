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

    // res.json({success:true, message: "Booking Added successfully."});
});
//
// //POST HTTP find user by username
//
router.post('/', (req,res,next) => {

    userList.findUserByUsername(req.body.username,(err,user)=>{
        if(err){


             res.json({success: false, message: `Failed to findUserByUsername. Error: ${err}`})


        }else {
            //find user

            if(user){
                res.json({success: false, message: 'user is existing'})
                return
            }


            let newuser = {
                username:req.body.username,
                password:req.body.password,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                phoneNumber:req.body.phoneNumber
            }


            userList.addUser(newuser,(err,newuser)=>{
                if(err){
                    res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
                }else {
                    res.write(JSON.stringify({success: true, users:newuser}));
                    res.end();
                }
            })
        }
    });




});


//POST HTTP method to /user

// router.post('/', (req,res,next) => {
//     let newUser = new userList({
//         username:req.body.username,
//         password:req.body.password,
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//     });
//
//     userList.findUserByUsername(newUser['username'],(err,user)=>{
//         if(err) {
//             res.json({success: false, message: `Failed to add the user. Error: ${err}`});
//         }else {
//             if (user){
//                 res.json({success: false, message: `${user.username} is already existed`})
//             } else {
//                 userList.addUser(newUser,(err,user)=>{
//                     if(err){
//                         res.json({success: false, message: `Failed to create a new user. Error: ${err}`})
//                     }else {
//                         res.json({success:true, message: user.username+" Added successfully."});
//                     }
//                 });
//             }
//         }
//
//         });
//
//
// });

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