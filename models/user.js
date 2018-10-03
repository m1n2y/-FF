//Require mongoose package
const mongoose = require('mongoose');

const  UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
})

const User = module.exports = mongoose.model('User',UserSchema);

//User.find() returns all the users
module.exports.getAllUser = (callback) => {
    User.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListByUserName = (userName, callback) => {
    let query = {username: userName};
    User.deleteOne(query, callback);
}
