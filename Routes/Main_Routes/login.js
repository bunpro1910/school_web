
const path = require('path')
let login =(req,res)=>{
    
    res.render(path.join(__dirname,"../../views/main/login"),{})
}

module.exports =login