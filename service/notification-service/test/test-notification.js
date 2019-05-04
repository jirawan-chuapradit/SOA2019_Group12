var chai = require("chai");
var expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();
const artcileDB = require("../models/articleSchema");

chai.use(chaiHttp);

describe("Notification", () => {
  describe("/POST Should Pass", () => {
    // test one subject

    it("POST Computing One Subject with Rank by Rank", done => {
        chai
          .request(server)
          .post("/computing/addNewSubject")
          .send([ { _id: 13,
            title: 'Earth article',
            subject: 'COM PRO',
            category: 'Human',
            author: 'Earth',
            description: 'Test kubb',
            grade: '3.5',
            midterm: 3,
            attendance: 4,
            groupWorker: 5,
            difficulty: 1,
            comment: [],
            __v: 0 } ])
          .end((err, res) => {
            if(err){
              console.log(err)
            }
            console.log("noification: " + res.status);
            console.log(res.body);
            res.should.have.status(200);
            done();
          });
    });
  });
});
