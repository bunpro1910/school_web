const express = require('express');
const Main_Routes = express.Router()
const path = require('path')
const fs = require('fs')


const loginroutes = require("./Main_Routes/login")
const handlelogin = require("./Main_Routes/loginhandle")
const indexroutes = require("./Main_Routes/index")
const logoutroutes = require("./Main_Routes/logout")
Main_Routes.get("/",indexroutes)
Main_Routes.get("/index",indexroutes)
Main_Routes.get("/login",loginroutes)
Main_Routes.get("/logout",logoutroutes)
//post
Main_Routes.post("/login",handlelogin)


module.exports = Main_Routes