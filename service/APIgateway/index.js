const ENV = process.env.NODE_ENV || 'development'
require('custom-env').env(ENV);

const express = require('express');
const httpProxy = require('express-http-proxy');
const Eureka = require('eureka-js-client').Eureka;
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';
const app = express();

// Configuration
const client = new Eureka({
  // application instance information
  instance: {
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
    // Eureka server
    host: process.env.EUREKA_SERVER_HOST || 'localhost',
    port: process.env.EUREKA_SERVER_PORT || 8761,
    servicePath: '/eureka/apps/',
  },
});

app.use(cors());

client.logger.level('debug');
client.start(error => {
  console.log(error || 'Eureka client started');

  // Service discovery from Eureka server
  const articleServiceInstance = client.getInstancesByAppId('ARTICLE-SERVICE');  
  const articleServiceUrl = `http://localhost:8000/`;
  const articleServiceProxy = httpProxy(articleServiceUrl);
  console.log(`Article-service: ${articleServiceUrl}`)
//   console.log(articleServiceInstance[0].hostName)


  // Proxy request
 


  app.use('/api/article', (req, res, next) => {
    articleServiceProxy(req, res, next);
});

});

app.listen(PORT, HOST);
console.log(`Running API gateway on http://${HOST}:${PORT}`);

// const app = require('express')()
// const httpProxy = require('express-http-proxy')
// const Eureka = require('eureka-js-client').Eureka

// const HOST = '0.0.0.0'
// const PORT = 3000
// const ENV = process.env.NODE_ENV || 'development'

// const client = new Eureka({
//     instance: {
//         app: 'api-gateway',
//         hostName: '35.247.168.170',
//         ipAddr: '35.247.168.170',
//         statusPageUrl: 'http://35.247.168.170:' + PORT,
//         vipAddress: 'api-gateway',
//         port: {
//             $: PORT,
//             '@enabled': true
//         },
//         dataCenterInfo: {
//             '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
//             name: 'MyOwn',
//         },
//         registerWithEureka: true,
//         fetchRegistry: true,
//     },
//     eureka: {
//         host: '104.199.152.94',
//         port: 80,
//         servicePath: '/eureka/apps/',
//     }
// })

// client.logger.level('debug')

// /**
//  * THIS SERVICE MUST CONNECT TO EUREKA SERVER
//  * NEW SERVICE INSERT CODE FOLLOW AS THIS PATTERN
//  *      const [SERVICE_NAME]ServiceInstance = client.getInstancesByAppId('[SERVICE_NAME]-service')
//         const [SERVICE_NAME]ServiceUrl = `http://${[SERVICE_NAME]ServiceInstance[0].hostName}:${[SERVICE_NAME]ServiceInstance[0].port.$}`
//         const [SERVICE_NAME]ServiceProxy = httpProxy([SERVICE_NAME]ServiceUrl)

//         app.use('/api/[SERVICE_NAME]', (req, res, next) => {
//             [SERVICE_NAME]ServiceProxy(req, res, next)
//         })
//  */
// client.start(error => {
//     console.log(error || 'NodeJS Eureka Started !')

//     const articleServiceInstance = client.getInstancesByAppId('ARTICLE-SERVICE')
//     const articleServiceUrl = `http://35.231.108.249:${articleServiceInstance[0].port.$}`
//     // const articleServiceUrl = `http://${articleServiceInstance[0].hostName}:${articleServiceInstance[0].port.$}`
//     const articleServiceProxy = httpProxy(articleServiceUrl)
//     console.log(`Article-service: ${articleServiceUrl}`)
//     console.log(articleServiceInstance[0].hostName)

//     app.use('/api/article', (req, res, next) => {
//         articleServiceProxy(req, res, next)
//     })
// })


// app.listen(PORT, HOST)
// console.log(`Running API gateway on http://${HOST}:${PORT}`)