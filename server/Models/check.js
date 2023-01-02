let checklecture= (req,res, next)=>{
    
    if(req.session.user){
        if(req.session.user.role==1){
            next()
            return
        }
    }
    res.redirect("/login")
}
let checkstudent = (req)=>{
    if(req.session.user){
        if(req.session.user.role==2){
            return true
        }
    }
    return false
}
exports.checklecture = checklecture
exports.checkstudent = checkstudent