
const path = require('path')
let login =(req,res)=>{
    
    if(req.session.user){
        res.json({user: req.session.user})
        return
    }
    res.json({user: "not found"})
}

module.exports =login