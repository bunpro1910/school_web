const path = require('path')
const {checklecture} =require('../../Models/check')

let index = (req,res)=>{

    if(!checklecture(req)){res.redirect('/login'); return}
    res.render(
        path.join(__dirname,"../../views/lecture/lecture_index")
            ,{
                user: req.session.user 
            }
        )

    return
        
 
    
    
}
module.exports = index