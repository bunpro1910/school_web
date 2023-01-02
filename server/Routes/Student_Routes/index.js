const path = require('path')
const {checkstudent} =require('../../Models/check')

let index = (req,res)=>{

    if(!checkstudent(req)){res.redirect('/login'); return}
    res.render(
        path.join(__dirname,"../../views/student/student_index")
            ,{
                user: req.session.user 
            }
        )

    return
        
 
    
    
}
module.exports = index