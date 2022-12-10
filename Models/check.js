let checklecture= (req)=>{
    if(req.session.user){
        if(req.session.user.role==1){
            return true
        }
    }
    return false
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