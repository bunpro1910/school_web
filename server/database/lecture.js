

 class lecture {
    constructor(){
        this.tablename = "public.lecture"
        this.id = "lecid"
        this.name ="name"
        this.gmail = "gmail"
        this.old = "old"
        this.description ="description"
    }
    createtable(){
        let query = `create table if not exists ${this.tablename}(
            ${this.id} character varying primary key,
            ${this.name} character varying,
            ${this.gmail} character varying,
            ${this.old} int ,
            ${this.description} character varying 
            );`
        return query
    }
}
module.exports = lecture


