const express =require('express');
const app = express();
const url  =require('url');
const path = require('path')
const cors =require("cors")
const request = require("request");
const port = process.env.PORT || 3000;
const Student_Routes = require('./Routes/Student')
const Main_Routes = require('./Routes/Main')
const ejs =require('ejs') 
var cookieSession = require('cookie-session')
const sessions = require('express-session')
const { fileURLToPath } =require('url')
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

app.use("/user",Student_Routes)
app.use("/",Main_Routes)




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











app.listen(port, () => {
    console.log(`Application started and Listening on port ${port}`);
});

          
    