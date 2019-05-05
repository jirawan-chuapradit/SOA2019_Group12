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

client.logger.level('debug')
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


