const path = require('path')
const {checklecture} =require('../../Models/check')
let arrlist =[]
let list
let selected =-1
const connect = require('../../database/connect')
function getlistselect (){
    arrlist =[]
    let date = new Date()
    const first = date.getDate() - date.getDay() + 1;
    let mondaycurent = new Date(date.setDate(first));
    let list =`<select name="date" id="date">`
    let j=0
    for (let i=0;i<=365;i=i+7){
        let beginyear = new Date("1/3/2022")
        let monday = addDays(beginyear,i)
        let endweek = addDays(monday,6)
        if(mondaycurent.getDate() == monday.getDate() &&mondaycurent.getMonth() == monday.getMonth() && selected == -1){
            list = list + `<option value="${j}" selected = "selected">${monday.getDate()}/${monday.getMonth()+1}/${monday.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}</option>`
        }else if(selected != -1){
            list = list + `<option  value="${j}" selected = "selected">${monday.getDate()}/${monday.getMonth()+1}/${monday.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}</option>`
        }else{
            list = list + `<option value="${j}">${monday.getDate()}/${monday.getMonth()+1}/${monday.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}</option>`
        }
        
        arrlist.push({monday:monday,endweek:endweek})
        j++
    }
    list = list+`</select>`
    return list
}
list = getlistselect()
let calender = async (req,res)=>{
    let date = new Date()
    arr = []
    selected
    const first = date.getDate() - date.getDay() + 1;
    let monday = new Date(date.setDate(first));
    let endweek = addDays(monday,6)
    if(req.query.date){
        monday = arrlist[req.query.date].monday
        endweek =arrlist[req.query.date].endweek
        selected = req.query.date
        list = getlistselect()
    }
    let current = monday

    if(!checklecture(req)){res.redirect("/login") ; return}

    let query =`select * from public.lecture where gmail = '${req.session.user.id}'`

    let lecture = await connect(query)
    
    if(lecture.rowCount <=0){
        return
    }
    let lecid = lecture.rows[0].lecid
   
    let query1 = `select s.date as date,s.time, c.subjectid, c.classid from public.schema as s, public.class as c where s.classid = c.classid and c.lecid='${lecid}' and to_char(s.date, 'YYYYMMDD')::integer >= ${monday.getFullYear()}${monday.getMonth()+1}${monday.getDate()} and to_char(s.date, 'YYYYMMDD')::integer <= ${endweek.getFullYear()}${endweek.getMonth()+1}${endweek.getDate()} order by s.date asc`
    let schema = await connect(query1)
    let query2 = `select * from public.time order by hours ASC`
   
    let time = await connect(query2)
    
    time.rows.map(item=>{
        let table = `<tr>
            <td scope="row">( ${item.hours}:${item.minutes} - ${item.endhours}:${item.endminutes} )</td>`
            for(let i=0;i<time.rowCount;i++){
                
                schema.rows.map(schemas =>{
                    
                    if(item.id == schemas.time && `${schemas.date.getFullYear()}/${schemas.date.getMonth()+1}/${schemas.date.getDate()}` == `${monday.getFullYear()}/${monday.getMonth()+1}/${monday.getDate()}`){
                        table =table +`<td>${schemas.classid}</td>`
                    }else{
                        table =table +`<td></td>`
                    }
                    monday = addDays(monday,1)
                })
               
            }
        table =table+`</tr>`
        arr.push(table)
    })
   
    res.render(
        path.join(__dirname,"../../views/lecture/calender")
        ,{
            user: req.session.user ,
            table:arr,
            list:list,
            date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}`,
            schema:schema, 
        }
    )
     
    
}
function addDays(date, days) {
    let result = new Date(date)
    result.setDate(result.getDate() + days);
    return result;
  }


module.exports = calender