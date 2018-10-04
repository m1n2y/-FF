//Require mongoose package
const mongoose = require('mongoose');

const  TableSchema = mongoose.Schema({
    tableNumber:{ type:String},
    tableType:{
        type:String,
        required:true,
        enum:['small','big']
    },
    booktimeList:{
      type:Array(Number),
    },

});

const Table = module.exports = mongoose.model('Table',TableSchema);


//Table.find() returns all the tables
module.exports.getAllTable = (callback) => {
    Table.find({},callback);
}


//newList.save is used to insert the document into MongoDB
module.exports.addTable = (newTable, callback) => {
    newTable.save(callback);
}