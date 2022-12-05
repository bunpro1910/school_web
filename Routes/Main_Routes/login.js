
const path = require('path')
let login =(req,res)=>{
    console.log(req.session)
    res.render(path.join(__dirname,"../../views/main/login"),{})
}

module.exports =login