var express = require("express")
var cors = require("cors")
var bodyPasser = require("body-parser")
var app = express()
var mongose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyPasser.json())
app.use(cors())
app.use(
    bodyPasser.urlencoded({
        extended:false
    })
)

/**
 * connected database name is mydb2
 */
const mongoURI = 'mongodb://localhost:27017/mydb2'

mongose
    .connect(mongoURI,{useNewUrlParser:true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

    var Users = require('./routes/Users')

    app.use('/users',Users)

    app.listen(port,()=>{
        console.log("Server is running on port: " + port)
    })

/**
 * How to compiler
 * npm run dev
 */