const express = require("express");
const router = express.Router();
const EmployeeSchema = require("../models/EmployeeModel.js");

router.get('/save', function(req, res) {
    var newEmployee = new EmployeeSchema({
        Full_Name:"Dev Gupta 23",
        Org_Name:"Campion",
        Emp_ID:108,
        Mobile:"9340128754",
        Email:"cafeteriaproject@gmail.com"
    });

    newEmployee.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

module.exports = router;