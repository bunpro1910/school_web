const express = require('express');
const Student_Routes = express.Router()
const path = require('path')
Student_Routes.get("/",(req,res)=>{
    res.render(path.join(__dirname,"../index"),{})
})

module.exports = Student_Routes