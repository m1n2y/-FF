const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../config/database')

const userList = require('../models/user');

// authenticate a user and create token for correct user
router.post('/', function (req, res) {
    userList.findUserByUsername(req.body.username, function (err, user) {
        if (err) {
            res.json({success: false, message: `${err}`});
        }
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        }
        else if (user) {
            //check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {
                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    username: user.username
                };

                let token = jwt.sign(payload, config.secret, {
                    expiresIn: 86400  // expires in 24 hours
                });
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    userInfo: {
                        username: user.username,
                        phoneNumber: user.phoneNumber,
                        token: token
                    },
                });
            }
        }
    });
});

module.exports = router;