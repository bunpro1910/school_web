const path = require('path')

let error = (req,res)=>{

    res.render(path.join(__dirname,"../../views/main/error"),{})
    
}
module.exports = error