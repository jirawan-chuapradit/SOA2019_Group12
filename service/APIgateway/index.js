const app = require('express')()
const httpProxy = require('express-http-proxy')
const Eureka = require('eureka-js-client').Eureka

const HOST = '0.0.0.0'
const PORT = 3000

const client = new Eureka({
    instance: {
        app: 'api-gateway',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost' + PORT,
        vipAddress: 'api-gateway',
        port: {
            $: PORT,
            '@enabled': true
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

client.logger.level('debug')
client.start(error => {
    console.log(error || 'NodeJS Eureka Started !')

    // Service discovery from Eureka server
    const articleServiceInstance = client.getInstancesByAppId('article-service')
    const articleServiceUrl = `http://${articleServiceInstance[0].hostName}:${articleServiceInstance[0].port.$}`
    const articleServiceProxy = httpProxy(articleServiceUrl)
    console.log(`Article-service: ${articleServiceUrl}`)


    const matchingServiceInstance = client.getInstancesByAppId('matching-service')
    const matchingServiceUrl = `http://${matchingServiceInstance[0].hostName}:${matchingServiceInstance[0].port.$}`
    const matchingServiceProxy = httpProxy(matchingServiceUrl)
    console.log(`Matching-service: ${matchingServiceUrl}`)

    const notificationServiceInstance = client.getInstancesByAppId('notification-service')
    const notificationerviceUrl = `http://${notificationServiceInstance[0].hostName}:${notificationServiceInstance[0].port.$}`
    const notificationServiceProxy = httpProxy(notificationerviceUrl)
    console.log(`Notification-service: ${notificationerviceUrl}`)

 // Proxy request
    app.use('/api/article', (req, res, next) => {
        articleServiceProxy(req, res, next)
    })

    app.use('/api/matching', (req, res, next) => {
        matchingServiceProxy(req, res, next)
    })

    app.use('/api/theArticles', (req, res, next) => {
        notificationServiceProxy(req, res, next)
    })
})

app.listen(PORT, HOST)
console.log(`Running API gateway on http://${HOST}:${PORT}`)