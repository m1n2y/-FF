const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./controllers/users');
const tablelist = require('./controllers/tablelist')
const booklist = require('./controllers/booklist')

mongoose.connect(config.database,{useNewUrlParser: true});
//Initialize our app variable
const app = express();

//Declaring Port
const port = 3000;

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user',users);
app.use('/api/tablelist',tablelist);
app.use('/api/booklist',booklist)

app.get('/', (req,res) => {
    res.send("Invalid page");
})

//Listen to port 3000
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});