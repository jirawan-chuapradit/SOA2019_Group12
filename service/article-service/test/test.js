var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

describe("Article", () => {
    describe('GET /', () => {
        //Test to get all articles 
        it('Should get all articles', (done) => {
            chai.request(server)
                .get('/')
                .end(function(err, res) {
                    console.log(res.status)
                    res.should.have.status(200)
                    res.should.be.a('object')
                    done()
                })
        })

        // Test to get single article
        it('should get single article', (done) => {
            chai.request(server)
                .get('/1')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    done()
                })
        })

        //Test to get single article
        it('should')
    })
})

// describe("GET a selected article", () => {
    
// })

