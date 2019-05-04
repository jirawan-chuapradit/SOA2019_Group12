var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)

describe("POST new article", () => {
    it("should create new article", function (done) {
        this.timeout(10000)
        chai.request(server)
            .post('/')
            .send({
                title: 'Test title',
                subject: 'Test subject',
                category: 'Test category',
                author: "Tester",
                description: 'This desctipton is for test',
                grade: 'A',
                midterm: 4,
                attendance: 3,
                groupWorker: 2,
                difficulty: 1
            })
            .end((err, res) => {
                res.should.have.status(201)
                done()
            })
    })

    it('shouldn\'t created new article', (done) => {
        chai.request(server)
            .post('/')
            .send({
                title: 'Test title',
                subject: 'Test subject',
                category: 'Test category',
                author: "Tester",
                description: 'This desctipton is for test',
                grade: 'A',
                midterm: 4,
                attendance: 3,
                groupWorker: 2
            })
            .end((err, res) => {
                res.should.have.status(400)
                done()
            })
    })
})

describe("GET all articles", () => {
    describe('Should get all article', () => {
        //Test to get all articles 
        it('Should get all articles', (done) => {
            chai.request(server)
                .get('/')
                .end(function(err, res) {
                    res.should.have.status(200)
                    res.should.be.a('object')
                    done()
                })
        })

        it('Should return search result', (done) => {
            const category = 'For test'
            const subject = 'TDD test'
            chai.request(server)
                .get(`/?category=${category}&subject=${subject}`)
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })

        it('Shouldn\'t return search result', (done) => {
            const category = 'category'
            const subject = 'Test2'
            chai.request(server)
                .get(`/?category=${category}&subject=${subject}`)
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        //Test to get single article
        // it("shouldn't get single article", (done) => {
        //     const id = 0
        //     chai.request(server)
        //         .get('/${id}')
        //         .end((err, res) => {
        //             res.should.have(404)
        //         })
        // })
    })
})


describe('GET single article', () => {
    // CAN get a article
    it('should get single article', (done) => {
        const id = 1
        const path = `/title/${id}`
        chai.request(server)
            .get(path)
            .end((err, res) => {
                res.should.have.status(200)
                res.should.be.a('object')
                done()
            })
    })

    // CAN'T get a article
    it("shouldn't get article", (done) => {
        const id = 0
        chai.request(server)
            .get(`/title/${id}`)
            .end((err, res) => {
                res.should.have.status(404)
                res.should.be.a('object')
                done()
            })
    })

    // CAN'T get a article with WRONG url
    it("shouldn't get article with this url", (done) => {
        chai.request(server)
            .get('/title/abc')
            .end((err, res) => {
                res.should.have.status(400)
                res.should.be.a('object')
                done()
            })
    })
})

describe("Add Comment", () => {
    it('should success to add comment', (done) => {
        const id = 20
        chai.request(server)
            .post(`/title/${id}`)
            .send({
                comment:[
                    {
                        content: 'test comment',
                        star: 4,
                        profileId: 59080808
                    }
                ]
            })
            .end((err, res) => {
                res.should.have.status(201)
                done()
            })
    })

    it('should success to add comment', (done) => {
        const id = 'abcd'
        chai.request(server)
            .post(`/title/${id}`)
            .send({
                comment:[
                    {
                        content: 'test comment',
                        star: 4,
                        profileId: 59080808
                    }
                ]
            })
            .end((err, res) => {
                res.should.have.status(400)
                done()
            })
    })
})