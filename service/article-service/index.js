const ENV = process.env.NODE_ENV || 'development'
require('custom-env').env(ENV)

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Eureka = require('eureka-js-client').Eureka

var port = process.env.PORT || 8000

const articleController = require('./controller/articleController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (ENV === 'test' || ENV === 'development'){
    app.use("/", articleController)
} else {
    const client = new Eureka({
        instance: {
            app: 'article-service',
            hostName: '35.231.108.249',//process.env.EUREKA_CLIENT_HOST || 'localhost',
            ipAddr: '35.231.108.249',
            statusPageUrl: 'http://35.231.108.249:80',// + port,
            vipAddress: 'article-service',
            port: {
                $: 80,//port,
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
    
        app.use("/", articleController)
    })
}

const server = app.listen(port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at http://${host}:${port}/`)
})

module.exports = app