
const path = require('path')
let logout =(req,res)=>{
    req.session =null
    res.redirect("/")
}

module.exports =logout