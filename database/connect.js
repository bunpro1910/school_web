const Connection =require('pg');
var connection = Connection.Pool
const course =require("./course")
// const myconect = new connection({
//     user: 'sqerguwe',
//     host: 'mouse.db.elephantsql.com',
//     database: 'sqerguwe',
//     password: '9zr3CHkRWZ-wmJt6c-c9hwZm49pFHZUH',
//     port: 5432,
//     ssl: {rejectUnauthorized: false},
//     });

    const myconect = new connection({
        user: 'shool_web_user',
        host: 'dpg-ce9bj682i3ms217qhu7g-a.singapore-postgres.render.com',
        database: 'shool_web',
        password: 'VFdQonbNIS2TnniblwiytKXpK1WYK3yX',
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
let createdb = async function() {
    let Course = new course();
    connect(Course.createtable)
}
module.exports = connect