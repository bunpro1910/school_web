const Connection =require('pg');
var connection = Connection.Pool
const myconect = new connection({
    user: 'sqerguwe',
    host: 'mouse.db.elephantsql.com',
    database: 'sqerguwe',
    password: '9zr3CHkRWZ-wmJt6c-c9hwZm49pFHZUH',
    port: 5432,
    ssl: {rejectUnauthorized: false},
    });


let connect = async(query)=>{
    try{
        let result = await myconect.query(query)
        return result
    }catch(e){
        console.log(e)
    }
    
    
  
}

module.exports = connect