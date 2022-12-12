const express = require('express');
const Lecture_Routes = express.Router()
const path = require('path')
const index = require('./Lecture_Routes/index')
const mangagercourse = require('./Lecture_Routes/manager_course')
const coursedetail = require('./Lecture_Routes/coursedetail')
const attendance = require('./Lecture_Routes/attendance')
const calender = require('./Lecture_Routes/calender')
Lecture_Routes.get("/index",index)
Lecture_Routes.get("/course",mangagercourse)
Lecture_Routes.get("/coursedetail",coursedetail)
Lecture_Routes.get("/attendance",attendance)
Lecture_Routes.get("/calender",calender)
module.exports = Lecture_Routes