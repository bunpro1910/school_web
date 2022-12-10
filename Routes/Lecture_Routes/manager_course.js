const path = require('path')
const {checklecture} =require('../../Models/check')

const connect = require('../../database/connect')


let index = async (req,res)=>{
    
    if(!checklecture(req)){res.redirect("/login") ; return}
    let result = await getlist(req)

    let query2 = `select * from public.category `
    let category = await connect(query2)
    if(result.rowCount ==0){result =undefined}
    res.render(
        path.join(__dirname,"../../views/lecture/lecture_manage_course")
        ,{
            user: req.session.user ,
            course : result,
            category:category
        }
    )
  
}
async function getlist(req){
    let query =`select c.id,c.name,c.description,c.lecid,l.name as lecname 
    from public.course as c,public.lecture as l 
    where c.lecid = l.lecid and l.gmail = '${req.session.user.id}' 
    ORDER BY name`
    if( req.query.cateid){
        query =`select c.id,c.name,c.description,c.lecid,l.name as lecname,cate.name as catename 
        from public.course as c,public.category as cate, public.lecture as l 
        where c.lecid = l.lecid and l.gmail = '${req.session.user.id}' and cate.cateid = '${req.query.cateid}' and cate.cateid = c.cateid 
        ORDER BY name`
    }
    
    let result = await connect(query)
    return result
}
module.exports = index