
let lecture = require('./lecture')
let lettures = new lecture()
 class category {
    constructor(){
        this.tablename = "public.category"
        this.id = "id"
        this.name ="name"
        this.description ="description"
    }
    createtable(){
        let query = `create table if not exists public.category (
            cateid character varying primary key, 
            name character varying, 
            description character varying
            );`
        return query
    }
}
module.exports = category


