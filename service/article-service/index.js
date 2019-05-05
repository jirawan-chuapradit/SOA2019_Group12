const ENV = process.env.NODE_ENV || 'development'
require('custom-env').env(ENV)

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Eureka = require('eureka-js-client').Eureka
const cors = require('cors')

var port = process.env.PORT || 8000

const articleController = require('./controller/articleController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

if (ENV === 'test' || ENV === 'development'){
    app.use("/", articleController)
} else {
    const client = new Eureka({
        instance: {
            app: 'article-service',
            hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
            ipAddr: '127.0.0.1',
            statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + port,
            vipAddress: 'article-service',
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
    
        app.use("/", articleController)
    })
}

const server = app.listen(port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at http://${host}:${port}/`)
})

module.exports = app