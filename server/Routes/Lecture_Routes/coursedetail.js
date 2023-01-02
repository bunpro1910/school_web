const path = require('path')


const connect = require('../../database/connect')


let coursedetail = async (req,res)=>{
    
   
    if(req.query.id == undefined){
        res.redirect("index")
        return
    }

    let query =`select c.id,c.name,c.description,c.lecid,l.name as lecname from public.course as c,public.lecture as l where c.lecid = l.lecid and l.gmail = '${req.session.user.id}' and c.id='${req.query.id}' ORDER BY name`

    let result = await connect(query)
    if(result.rowCount ==0){result =undefined}
    res.render(
        path.join(__dirname,"../../views/lecture/detail_course")
        ,{
            user: req.session.user ,
            course:result,
            
        }
    )
     
    
}

module.exports = coursedetail