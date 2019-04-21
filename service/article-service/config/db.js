const mongoose = require('mongoose')
const mongodb = 'mongodb://127.0.0.1/Article'

mongoose.connect(mongodb, {useNewUrlParser: true}, function (err){
    if (err) throw err
    else console.log("Successfully Connected DB")
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = mongoose