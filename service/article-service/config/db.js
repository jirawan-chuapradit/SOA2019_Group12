const mongoose = require('mongoose')
const mongodb = process.env.MONGODB_URL ||'mongodb://0.0.0.0:27017/Article-service'

mongoose.connect(mongodb, {useNewUrlParser: true}, function (err){
    if (err) throw err
    else console.log("Successfully Connected DB with URL:", mongodb)
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = mongoose