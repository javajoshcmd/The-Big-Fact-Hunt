const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt')
const saltRounds = 10

require('dotenv').config()


const app = express()
                    

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24*1000,
    }
}))

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
})

app.post('/register', (req, res)=>{

const User = req.body.username;
const Passwrd = req.body.password;

bcrypt.hash(Passwrd, saltRounds, (err, hash)=>{

    if(err){
        console.log(err)
    }

    db.query("INSERT INTO login (User, Passwrd) VALUES (?,?)", 
    [User, hash], 
    (err, results)=>{
        if (err){
            res.status(500).json({err})
        }else{
            res.status(201).json({results})
        }
    })
})
})


app.get('/login', (req, res)=>{
    if (req.session.user){
        res.send({loggedIn : true, user: req.session.user})
    }else{
        res.send({loggedIn : false})
    }
})

app.post('/login', (req, res)=>{
    const User = req.body.username;
    const Passwrd = req.body.password;

db.query(
    "SELECT * FROM login WHERE User = ?;", 
    User, 
    (err, results)=>{
        if (err){
            res.status(500).json({err})
        }
        
        if (results.length > 0){
            bcrypt.compare(Passwrd, results[0].Passwrd, (err, response)=>{
                if(response){
                    req.session.user = results;
                    console.log(req.session.user)
                    res.send(results)
                }else{
                    res.send({ message: "Wrong username/password combo"})
                }
            })
        }else{
            res.send({ message: "USER does not exist"})
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server is running")
});