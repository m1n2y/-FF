//Require mongoose package
const mongoose = require('mongoose');

const  TableSchema = mongoose.Schema({
    tableNumber:{ type:String ,required:true, unique: true},
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
    Table.find({"tableNumber": "A5",'tableType': 'small'},callback);
}

module.exports.getAllSmallTables = (callback) => {
    Table.find({'tableType': 'small'},callback);
}

module.exports.getAllBigTables = (callback) => {
    Table.find({'tableType': 'big'},callback);
}





//newList.save is used to insert the document into MongoDB
module.exports.addTable = (newTable, callback) => {
    newTable.save(callback);
}

module.exports.updateBooktime = (bookInfo,callback) =>{
    let query = {tableNumber: bookInfo.tableNumber};
    let updateTime =  bookInfo.booktimeList
    Table.update(query, { $push: {booktimeList: updateTime } },'',callback);

}

module.exports.getTableByBooktimeList = (bookTime,callback) =>{
    let query = {"booktimeList" : bookTime.booktimeList};
    Table.find(query,{tableNumber:1, _id:0},callback);
}

module.exports.getTableByBooktimeAndType = (postData,callback) =>{
    let query = {"booktimeList" : {$ne:postData.booktimeList}, "tableType": postData.tableType};
    Table.find(query,{tableNumber:1, _id:0},callback);
}
