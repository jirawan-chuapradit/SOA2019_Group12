var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.port || 5050
const Eureka = require('eureka-js-client').Eureka;

const matchingSubjectController = require("./controller/matchingSubjectController")

// parse application/json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

const mongoURI = process.env.MONGODB_URL || 'mongodb://localhost:27017/subject'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=>console.log("MongoDB connected"))
// .catch(err=> console.log(err))



// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'matching-service',
        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + port,
        vipAddress: 'matching-service',
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
        leaseRenewalIntervalInSeconds: 1,
        leaseExpirationDurationInSeconds: 2
    },
    eureka: {
        // Eureka server
        host: process.env.EUREKA_SERVER_HOST || 'localhost',
        port: process.env.EUREKA_SERVER_PORT || 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || 'Eureka client started');
    app.use("/", matchingSubjectController)
});



app.listen(port,() =>{
    console.log("Index.js is running on port: " + port)
})

module.exports = app 