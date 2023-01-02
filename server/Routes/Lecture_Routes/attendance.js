const path = require('path')


const connect = require('../../database/connect')


let attendance = async (req,res)=>{
    let present = true
    let isupdated = 0
    if(!req.query.id){
        res.status(404).redirect("/error") ; return
    }
    const attendance=`select * from public.attendance where schemaid=${req.query.id}`
    const attendancelist = await connect(attendance)

    let query = `select st.background_img, st.std_id, st.name, s.id from public.schema as s, public.studentlist as sl, public.student as st where sl.classid = s.classid and sl.studentid = st.std_id and s.id = '${req.query.id}';`
    if(attendancelist.rowCount>0){
        isupdated=1
        query = `select a.ispresent, st.background_img, st.std_id, st.name, s.id from public.attendance as a, public.schema as s, public.studentlist as sl, public.student as st where sl.classid = s.classid and sl.studentid = st.std_id and s.id = '${req.query.id}' and a.studentid = st.std_id and a.schemaid = s.id ;`
    }
    _liststudent = []
    
    let classlist = await connect(query)

    if(classlist.rowCount ==0){
        res.redirect("/error") ; return
    }
    classlist.rows.map((row,i)=>{
        if(isupdated==1){
            present = row.ispresent
        }
        let table = `<tr>
            <td scope="row">${i}</td>
            <td >${row.std_id}</td>
            <td >${row.name}</td>
            <td class ="img-avatar"><img class ="img-avatar" src="${row.background_img}" alt="avatar"></td>
            <td ><input type="radio" id="${row.std_id}" ${present?"checked":""} name="${row.std_id}" value="true"></td>
            <td ><input type="radio" id="${row.std_id}" ${present?"":"checked"} name="${row.std_id}" value="false"></td>
            </tr>
            `
        _liststudent.push(table)
    })
    

    res.render(
        path.join(__dirname,"../../views/lecture/attendance")
        ,{
            user: req.session.user ,      
            classid:classlist.rows[0].classid,
            table:_liststudent,
            schemaid: req.query.id,
            isupdated:isupdated,
            date:req.query.date
        }
    )
    
     
    
}


module.exports = attendance