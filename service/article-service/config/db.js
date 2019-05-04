const mongoose = require('mongoose')
const mongodb = 'mongodb://localhost/Article-service'

mongoose.connect(mongodb, {useNewUrlParser: true}, function (err){
    if (err) throw err
    else console.log("Successfully Connected DB with URL:", mongodb)
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = mongoose