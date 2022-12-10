const express = require('express');
const Student_Routes = express.Router()
const path = require('path')
const index = require('./Student_Routes/index')
const calender = require('./Student_Routes/calender')
Student_Routes.get("/index",index)
Student_Routes.get("/calender",calender)

module.exports = Student_Routes