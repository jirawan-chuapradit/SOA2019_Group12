const express = require("express")
const app = express()
const port = 8000
const bodyParser = require("body-parser")
const Eureka = require('eureka-js-client').Eureka

const articleController = require('./controller/articleController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const client = new Eureka({
    instance: {
        app: 'article-service',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + port,
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
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/',
    }
})

// client.logger.level('debug')
// client.start(error => {
//     console.log(error || 'NodeJS Eureka Started !')

//     app.use("/", articleController)
// })

app.use("/", articleController)

const server = app.listen(port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at http://${host}:${port}/`)
})

module.exports = app