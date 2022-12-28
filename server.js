const express =require('express');
const app = express();
const url  =require('url');
const cors =require("cors")
const port = process.env.PORT || 3000;
const {checklecture} = require('./Models/check')
const Main_Routes = require('./Routes/Main')
const Lecture_Routes =require('./Routes/Lecture')
const Student_Routes =require('./Routes/Student')
const ejs =require('ejs') 
var cookieSession = require('cookie-session')
const morgan =require('morgan')
const bodyParser = require('body-parser')
app.set('trust proxy', 1)
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(express.urlencoded({ extended: true })); 
app.use('/assets',express.static((__dirname+ '/assets')))

app.use(cookieSession({
    name: 'session',
    keys: ["phamlehaison"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))


app.use(cors())
app.use(morgan('dev'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





app.use("/",Main_Routes)
app.use("/lecture",checklecture,Lecture_Routes)

app.use("/student",Student_Routes)
app.use("/staff",Student_Routes)
app.use('*',(req,res)=>{
    res.status(404)
    res.redirect("/error")
})





app.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`);
});

          
    