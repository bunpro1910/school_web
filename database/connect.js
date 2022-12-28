const Connection =require('pg');
var connection = Connection.Pool
const course =require("./course")
const lecture =require("./lecture")
// const myconect = new connection({
//     user: 'sqerguwe',
//     host: 'mouse.db.elephantsql.com',
//     database: 'sqerguwe',
//     password: '9zr3CHkRWZ-wmJt6c-c9hwZm49pFHZUH',
//     port: 5432,
//     ssl: {rejectUnauthorized: false},
//     });

    const myconect = new connection({
        user: 'school_web_user',
        host: 'dpg-ce9ccmun6mpgqu8n4o80-a.singapore-postgres.render.com',
        database: 'school_web',
        password: 'VDe73EGMoiMM1CK4LmKlPZ98cPVew6dg',
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
    let lectures = new lecture();
    lectures.createtable()
    Course.createtable()
}
createdb()
module.exports = connect