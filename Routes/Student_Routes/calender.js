const path = require('path')
const {checkstudent} =require('../../Models/check')

const connect = require('../../database/connect')


let calender = async (req,res)=>{
    if(!checkstudent(req)){res.redirect("/login") ; return}
    let date = new Date()
   
    let monday = addDays(date,-date.getDay()+1)
    if(req.query.next){
        monday =addDays(req.query.next,7)   
    }
    if(req.query.previous){
        monday =addDays(req.query.previous,-7)   
    }
    let endweek = addDays(monday,7)
   

    res.render(
        path.join(__dirname,"../../views/student/calender")
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

module.exports = calender