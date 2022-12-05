const path = require('path')

let index = (req,res)=>{

    if(req.session.user){
        res.render(path.join(__dirname,"../../views/main/index"),{user: req.session.user})
    }else{
        res.render(path.join(__dirname,"../../views/main/index"),{})
    }
    
}
module.exports = index