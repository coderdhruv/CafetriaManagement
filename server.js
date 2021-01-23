var mongoose = require('mongoose');
const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");
var employeeSchema = require("./models/EmployeeModel.js");
var employee = require("./middleware/add_employee.js");
//var home_page = require("./middleware/home_page.js");
const port = 4000;
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


var query = 'mongodb+srv://Admin:cafeteria123@cluster0.zaasw.mongodb.net/CafeteriaDB?retryWrites=true&w=majority'

const db = (query)
mongoose.Promise = global.Promise

mongoose.connect(db, { useNewUrlParser : true,  
    useUnifiedTopology: true }, function(error) { 
        if (error) { 
            console.log("Error!" + error); 
        } 
        else {
            console.log('Mongoose connection successfully established');
        }
}); 


app.listen(port,function(){
    console.log("Server is listening on port :" + port);
});


app.use('/add_data',function(req,res){
    res.send('You are attempting to add a user to the datbase')
});
app.use('/add',employee);
app.use('/',function(req,res){
    res.send('hello world')
});
//module.exports = router;