var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.port || 5051
const Eureka = require('eureka-js-client').Eureka;



const NotificationController = require("./controller/notificationController")

// parse application/json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)


// Configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: 'notification-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + port,
        vipAddress: 'notification-service',
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
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    },
});

client.logger.level('debug');
client.start((error) => {
    console.log(error || 'Eureka client started');
    app.use("/", NotificationController);
});



const mongoURI = 'mongodb://localhost:27017/Article'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=>console.log("MongoDB Article connected"))
.catch(err=> console.log(err))


app.listen(port,() =>{
    console.log("Index.js is running on port: " + port)
})


module.exports = app 