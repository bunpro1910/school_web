
const connect =require("../../database/connect")

let handlelogin = async (req,res)=>{
    let query =`select * from public.account where account_id = '${req.body.userid}' and password = '${req.body.password}'`
    let account = await connect(query)
    if(account.rowCount >0){
        req.session.user ={
            id: account.rows[0].account_id,
            role : account.rows[0].roleid
        }
        res.redirect(`/`)
        return
    }
    
    res.redirect(`/login`)
    
  


  
}

module.exports =handlelogin