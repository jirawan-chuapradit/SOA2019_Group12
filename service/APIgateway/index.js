const ENV = process.env.NODE_ENV || 'development'
// require('custom-env').env(ENV)
require('@google-cloud/trace-agent').start();

const express = require('express')
const httpProxy = require('express-http-proxy')
const Eureka = require('eureka-js-client').Eureka
const cors = require('cors')

// Constants
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0'
const app = express()

// Configuration
const client = new Eureka({
    instance: {
        instanceId: 'api-gateway',
        app: 'api-gateway',
        hostName: process.env.EUREKA_CLIENT_HOST || 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: (process.env.EUREKA_CLIENT_URL || 'http://localhost:') + PORT,
        vipAddress: 'api-gateway',
        port: {
            $: PORT,
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
        host: process.env.EUREKA_SERVER_HOST || 'localhost',
        port: process.env.EUREKA_SERVER_PORT || 8761,
        servicePath: '/eureka/apps/',
    }
})

app.use(cors())

client.logger.level('debug')
client.start(error => {

    console.log(error || 'Eureka client started')

    const articleServiceInstance = client.getInstancesByAppId('article-service')
    const articleServiceUrl = `http://${articleServiceInstance[0].hostName}:${articleServiceInstance[0].port.$}`
    const articleServiceProxy = httpProxy(articleServiceUrl)
    console.log(`Article-service: ${articleServiceUrl}`)

    const matchingServiceInstance = client.getInstancesByAppId('matching-service')
    const matchingServiceUrl = `http://${matchingServiceInstance[0].hostName}:${matchingServiceInstance[0].port.$}`
    const matchingServiceProxy = httpProxy(matchingServiceUrl)
    console.log(`matching-service: ${matchingServiceUrl}`)

 // Proxy request
    app.use('/api/article', (req, res, next) => {
        articleServiceProxy(req, res, next)
    })
    app.use('/api/matching', (req, res, next) => {
        matchingServiceProxy(req, res, next)
    })
})

app.listen(PORT)
console.log(`Running API gateway on http://${HOST}:${PORT}`)
