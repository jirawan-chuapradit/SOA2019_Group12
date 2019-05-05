const app = require('express')()
const httpProxy = require('express-http-proxy')
const Eureka = require('eureka-js-client').Eureka

const HOST = '0.0.0.0'
const PORT = 3000
const ENV = process.env.NODE_ENV || 'development'

const client = new Eureka({
    instance: {
        app: 'api-gateway',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:' + PORT,
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
    // const articleServiceUrl = `http://${articleServiceInstance[0].hostName}:${articleServiceInstance[0].port.$}`
    const articleServiceProxy = httpProxy(articleServiceUrl)
    console.log(`Article-service: ${articleServiceUrl}`)

    app.use('/api/article', (req, res, next) => {
        articleServiceProxy(req, res, next)
    })
})


app.listen(PORT, HOST)
console.log(`Running API gateway on http://${HOST}:${PORT}`)