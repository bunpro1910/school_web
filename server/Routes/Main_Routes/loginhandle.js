
const connect =require("../../database/connect")
const path = require('path')
let handlelogin = async (req,res)=>{
    let query =`select * from public.account where lower (account_id) = lower('${req.body.userid}') and password = '${req.body.password}'`

    
    let account = await connect(query)
    if(account.rowCount >0){
        req.session.user ={
            id: account.rows[0].account_id,
            role : account.rows[0].roleid,
        }

        if(account.rows[0].roleid == 1){
            let query1 = `select * from public.lecture where account_id = '${req.body.userid}'`
            let lecture = await connect(query1)
            req.session.user ={
                id: account.rows[0].account_id,
                role : account.rows[0].roleid,
                lecid : lecture.rows[0].lecid
            }
            res.redirect(`/lecture/index`)
        }else if(account.rows[0].roleid == 2){
            res.redirect(`/student/index`)
        }
        
        return
    }else{
        res.json({error:"User ID and password not match"})
    }
    
    
    
  


  
}

module.exports =handlelogin