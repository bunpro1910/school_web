
let lecture = require('./lecture')
let lettures = new lecture()

let category = require('./category')
let categorys = new category()
 class course {
    constructor(){
        this.tablename = "public.course"
        this.id = "id"
        this.name ="name"
        this.lectureid = lettures.id
        this.description ="description"
        this.categoryid = categorys.id
    }
    createtable(){
        let query = `create table if not exists ${this.tablename}(
            ${this.id} bigserial primary key,
            ${this.name} character varying,
            ${this.lectureid} character varying,
            ${this.categoryid} character varying,
            foreign key(${this.lectureid}) character varying  references ${lettures.tablename} (${this.lectureid}),
            foreign key(${this.categoryid}) character varying  references ${categorys.tablename} (${this.categoryid}),
            ${this.description} character varying 
            );`
        return query
    }
}
module.exports = course


