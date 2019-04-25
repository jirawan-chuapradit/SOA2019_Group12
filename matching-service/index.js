var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.port || 5050

const matchingSubjectController = require("./controller/matchingSubjectController")

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoURI = 'mongodb://localhost:27017/subject'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=>console.log("MongoDB connected"))
.catch(err=> console.log(err))

app.use("/matching", matchingSubjectController)

app.listen(port,() =>{
    console.log("Index.js is running on port: " + port)
})

module.exports = app 