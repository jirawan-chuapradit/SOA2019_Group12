var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../index");

chai.use(chaiHttp);

describe("Matcging", () => {
  describe("should pass", () => {
    // Test to get subject that match with rank
    it("Should get subject that match with rank", done => {
      chai
        .request(server)
        .get("/matching")
        .send({
          grade: "1",
          midterm: "1",
          attendance: "1",
          groupWorker: "1",
          difficulty: "1"
        })
        .end(function(err, res) {
          console.log(res.status);
          console.log(res.body);

          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    }).timeout(15000);

    // Test Can't find the article suitable for you
    it("Should GET a empty list with not match", done => {
      chai
        .request(server)
        .get("/matching")
        .send({
          grade: "4",
          midterm: "4",
          attendance: "4",
          groupWorker: "5",
          difficulty: "5"
        })
        .end((err, res) => {
            console.log(res.status);
            console.log(res.body);
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });

      // Test POST with not exists subject calculate Avg Rank of Subject
      it("Should POST not exist", done => {
        chai
          .request(server)
          .post("/matching/addMatchingSubject")
          .send({
            subject: 'SVV',
            category: 'Software Engineer',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5,
          })
          .end((err, res) => {
              console.log(res.status);
              console.log(res.body);
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          });
      });
  });
});
