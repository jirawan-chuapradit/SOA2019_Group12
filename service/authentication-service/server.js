var express = require("express")
var cors = require("cors")
var bodyPasser = require("body-parser")
var app = express()
var mongose = require("mongoose")
var port = process.env.PORT || 5000
const Eureka = require('eureka-js-client').Eureka

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
const mongoURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/mydb2'

mongose
    .connect(mongoURI,{useNewUrlParser:true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users')

const client = new Eureka({
    instance: {
        instanceId: 'authentication-service',
        app: 'authentication-service',
        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + port,
        vipAddress: 'authentication-service',
        port: {
            $: port,
            '@enabled': 'true',
        },
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
        registerWithEureka: true,
        fetchRegistry: true,
    },
    eureka: {
        host: process.env.EUREKA_SERVER_HOST || 'localhost',
        port: process.env.EUREKA_SERVER_PORT || 8761,
        servicePath: '/eureka/apps/',
    }
})

client.logger.level('debug')
client.start(error => {
    console.log(error || 'NodeJS Eureka Started !')

    app.use('/users',Users)
})

app.listen(port,()=>{
    console.log("Server is running on port: " + port)
})

/**
 * How to compiler
 * npm run dev
 */