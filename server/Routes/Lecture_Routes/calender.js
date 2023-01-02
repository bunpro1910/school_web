const path = require('path')

let arrlist =[]
let list
let selected =-1
const connect = require('../../database/connect')
function getlistselect (){
    arrlist =[]
    let date = new Date()
    const first = date.getDate() - date.getDay() + (date.getDay() == 0 ? -6:1);
    let mondaycurent = new Date(date.setDate(first));
    let list =`<select name="date" id="date">`
    let j=0
    for (let i=0;i<=365;i=i+7){
        let beginyear = new Date("1/3/2022")
        let monday = addDays(beginyear,i)
        let endweek = addDays(monday,6)
        if(mondaycurent.getDate() == monday.getDate() &&mondaycurent.getMonth() == monday.getMonth() && selected == -1){
            list = list + `<option value="${j}" selected = "selected">${monday.getDate()}/${monday.getMonth()+1}/${monday.getFullYear()} - ${endweek.getDate()}/${endweek.getMonth()+1}/${endweek.getFullYear()}</option>`
        }else if(selected ==j){
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
    let ishavedate = ""
    let date = new Date()
    arr = []
    selected
    const first = date.getDate() - date.getDay() + (date.getDay() == 0 ? -6:1);
    let monday = new Date(date.setDate(first));
    let endweek = addDays(monday,6)
    if(req.query.date){
        monday = arrlist[req.query.date].monday
        endweek =arrlist[req.query.date].endweek
        selected = req.query.date
        list = getlistselect()
        ishavedate=`&date=${req.query.date}`
    }
    let current = monday

    
    let lecid = req.session.user.lecid
    
    let query1 = `select s.id,s.date as date,s.time, c.subjectid, c.classid from public.schema as s, public.class as c where s.classid = c.classid and c.lecid='${lecid}' and to_char(s.date, 'YYYYMMDD')::integer >= ${monday.getFullYear()}${monday.getMonth()+1}${monday.getDate()} and to_char(s.date, 'YYYYMMDD')::integer <= ${endweek.getFullYear()}${endweek.getMonth()+1}${endweek.getDate()} order by s.date asc`
    let schema = await connect(query1)
    
    let query2 = `select * from public.time order by id ASC`
    let time = await connect(query2)
    
    let query3 = `select a.schemaid from public.attendance as a,public.lecture as l ,public.schema as s,public.class as c  where l.lecid = c.lecid and c.classid = s.classid and l.lecid='${req.session.user.lecid}' and a.schemaid = s.id`
    let isattendance = await connect(query3)
    
    time.rows.map( async item=>{
        
        let arrtype=[]
         schema.rows.find(schems=>{
            if(schems.time == item.id){
                arrtype.push(schems)
            }
            
        })

        let index = 0 
        let table = `<tr>
            <td scope="row">( ${item.hours}:${item.minutes} - ${item.endhours}:${item.endminutes} )</td>`
        let currentday = monday

                for(let z = 0;z <7;z++){
                    currentday = addDays(monday,z)  
                if(index<arrtype.length){
                    let text = "check attendace"
                    if(isattendance.rows.find(item=>{return item.schemaid == arrtype[index].id})){
                       
                        text = "checked"
                      
                    }
                    if(`${arrtype[index].date.getFullYear()}/${arrtype[index].date.getMonth()}/${arrtype[index].date.getDate()}`==`${currentday.getFullYear()}/${currentday.getMonth()}/${currentday.getDate()}`){
                        table =table +`<td><a href="class?id=${arrtype[index].classid}">${arrtype[index].classid}</a><br><a href="subject?id=${arrtype[index].subjectid}">${arrtype[index].subjectid}</a><br><a href="attendance?id=${arrtype[index].id}${ishavedate}">${text}</a></td>`
                        index++
                    }else{
                        table =table +`<td></td>`
                    }
                }else{
                    table =table +`<td></td>`
                }

            
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
                
            }
        )
 
    
     
    
}
function addDays(date, days) {
    let result = new Date(date)
    result.setDate(result.getDate() + days);
    return result;
  } 
    
   


module.exports = calender