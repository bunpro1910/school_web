const path = require('path')


const connect = require('../../database/connect')


let attendance = async (req,res)=>{
    if(!req.body.schemaid){
       return
    }
    
    const query1 = `select st.std_id,s.id from public.schema as s, public.studentlist as sl, public.student as st where sl.classid = s.classid and sl.studentid = st.std_id and s.id = '${req.body.schemaid}';`
    let studentlist = await connect(query1)
    let queryinsert = ``
    if(studentlist.rowCount==0){
        return
    }
    studentlist.rows.map((student)=>{
        if(req.body.isupdated==1 ){
            if(req.body[`${student.std_id}`]!='undefined'){
                queryinsert += `update public.attendance set ispresent= ${req.body[student.std_id]} where studentid='${student.std_id}' and schemaid= ${student.id} ;\n`
            }
        }else{
            if(req.body[`${student.std_id}`]!='undefined'){
                queryinsert += `insert into public.attendance (studentid,schemaid,ispresent) values('${student.std_id}',${student.id},${req.body[student.std_id]});\n`
            }
        }

    })
    let result = await connect(queryinsert)
    if(result.rowCount==0){
        res.redirect('error')
        return
    }
    if(req.body.date){
        res.redirect(`calender?date=${req.body.date}`)
    }else{
        res.redirect('calender')
    }
    
}


module.exports = attendance