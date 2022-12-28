const path = require('path')


const connect = require('../../database/connect')


let attendance = async (req,res)=>{
    _liststudent = []
    
    const query = `select s.background_img, s.std_id,s.name, st.classid,st.studentid from public.class as c, public.studentlist as st, public.student as s where c.classid = st.classid and c.classid='${req.query.id}' and st.studentid = s.std_id`
    let classlist = await connect(query)
    if(classlist.rowCount ==0){
        res.status(404).redirect("/error") ; return
    }
    classlist.rows.map((row,i)=>{
        let table = `<tr>
            <td scope="row">${i}</td>
            <td >${row.std_id}</td>
            <td >${row.name}</td>
            <td class ="img-avatar"><img class ="img-avatar" src="${row.background_img}" alt="avatar"></td>
            </tr>
            `
        _liststudent.push(table)
    })
    
    res.render(
        path.join(__dirname,"../../views/lecture/class")
        ,{
            user: req.session.user ,     
            table:_liststudent,
            classid: classlist.rows[0].classid
        }
    )
    
     
    
}


module.exports = attendance