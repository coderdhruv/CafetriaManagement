const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    Full_Name:{
        type : String
    },
    Org_Name:{
        type:String
    },
    Emp_ID:{
        type:Number
    },
    Mobile:{
        type:String
    },
    Email:{
        type:String
    }
});

module.exports = mongoose.model("EmployeeSchema",EmployeeSchema);