const path = require('path')


let index = (req,res)=>{

 
    res.render(
        path.join(__dirname,"../../views/lecture/lecture_index")
            ,{
                user: req.session.user 
            }
        )

    return
        
 
    
    
}
module.exports = index