const path = require('path')
const {checklecture} =require('../../Models/check')

const connect = require('../../database/connect')


let attendance = async (req,res)=>{
    let date = new Date()
   
    let monday = addDays(date,-date.getDay()+1)
    if(req.query.next){
        monday =addDays(req.query.next,7)   
    }
    if(req.query.previous){
        monday =addDays(req.query.previous,-7)   
    }
    let endweek = addDays(monday,7)
    if(!checklecture(req)){res.redirect("/login") ; return}

    res.render(
        path.join(__dirname,"../../views/lecture/attendance")
        ,{
            user: req.session.user ,     
            date:`${monday.getDate()}/${monday.getMonth()+1}/${monday.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}`,
            datefull:monday
        }
    )
    
     
    
}
function addDays(date, days) {
    let result = new Date(date)
    result.setDate(result.getDate() + days);
    return result;
  }

module.exports = attendance