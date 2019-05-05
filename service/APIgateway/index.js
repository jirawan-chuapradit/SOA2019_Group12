const app = require('express')()
const httpProxy = require('express-http-proxy')
const Eureka = require('eureka-js-client').Eureka

const HOST = '0.0.0.0'
const PORT = 3000
const ENV = process.env.NODE_ENV || 'development'

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

client.logger.level('debug')

/**
 * THIS SERVICE MUST CONNECT TO EUREKA SERVER
 * NEW SERVICE INSERT CODE FOLLOW AS THIS PATTERN
//  *      const [SERVICE_NAME]ServiceInstance = client.getInstancesByAppId(`[SERVICE_NAME]-service`)
        const [SERVICE_NAME]ServiceUrl = `http://${[SERVICE_NAME]ServiceInstance[0].hostName}:${[SERVICE_NAME]ServiceInstance[0].port.$}`
        const [SERVICE_NAME]ServiceProxy = httpProxy([SERVICE_NAME]ServiceUrl)

        app.use('/api/[SERVICE_NAME]', (req, res, next) => {
            [SERVICE_NAME]ServiceProxy(req, res, next)
        })
 */
client.start(error => {
    console.log(error || 'NodeJS Eureka Started !')

    const articleServiceInstance = client.getInstancesByAppId('article-service')
    const articleServiceUrl = `http://${articleServiceInstance[0].hostName}:${articleServiceInstance[0].port.$}`
    const articleServiceProxy = httpProxy(articleServiceUrl)
    console.log(`Article-service: ${articleServiceUrl}`)

    const authenticationServiceInstance = client.getInstancesByAppId('authentication-service')
    const authenticationServiceUrl = `http://${authenticationServiceInstance[0].hostName}:${authenticationServiceInstance[0].port.$}`
    const authenticationServiceProxy = httpProxy(authenticationServiceUrl)
    console.log(`authentication-service: ${authenticationServiceUrl}`)

    const matchingServiceInstance = client.getInstancesByAppId('matching-service')
    const matchingServiceUrl = `http://${matchingServiceInstance[0].hostName}:${matchingServiceInstance[0].port.$}`
    const matchingServiceProxy = httpProxy(matchingServiceUrl)
    console.log(`matching-service: ${matchingServiceUrl}`)

    const notificationServiceInstance = client.getInstancesByAppId('notification-service')
    const notificationServiceUrl = `http://${notificationServiceInstance[0].hostName}:${notificationServiceInstance[0].port.$}`
    const notificationServiceProxy = httpProxy(notificationServiceUrl)
    console.log(`notification-service: ${notificationServiceUrl}`)

    app.use('/api/article', (req, res, next) => {
        articleServiceProxy(req, res, next)
    })
    app.use('/api/matching', (req, res, next) => {
        matchingServiceProxy(req, res, next)
    })
    app.use('/api/authentication', (req, res, next) => {
        authenticationServiceProxy(req, res, next)
    })
    app.use('/api/notification', (req, res, next) => {
        notificationServiceProxy(req, res, next)
    })
})


app.listen(PORT)
console.log(`Running API gateway on http://${HOST}:${PORT}`)