
var chai = require("chai");
var expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../index");

chai.use(chaiHttp);

describe("Matching", () => {
  describe("/GET", () => {
    // Test to get subject that match with rank
    it("Should not found", done => {
      chai
        .request(server)
        .get("/matching/about")
        .end(function(err, res) {
          console.log(res.status);
          expect(404).to.equal(res.status);
          done();
        });
    });

    // Test to get subject that match with rank
    it("Should get subject that match with rank",  done => {
       chai
        .request(server)
        .get("/matching/?midterm=1&attendance=1&groupWorker=2&difficulty=1")
        .end(function(err, res) {
          console.log(res.status);
          console.log(res.body);

          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    }).timeout(15000);

    // Test Can't find the article suitable for you
    it("Should GET a empty list with not match", done => {
      chai
        .request(server)
        .get("/matching/?midterm=5&attendance=5&groupWorker=5&difficulty=5")
        .end((err, res) => {
          console.log(res.status);
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    // Test POST with not exists subject calculate Avg Rank of Subject
    it("Should POST not exist", done => {
      chai
        .request(server)
        .post("/matching/addMatchingSubject")
        .send({
          subject: "ITF99",
          category: "Software Engineer",
          grade: 3,
          midterm: 3,
          attendance: 3,
          groupWorker: 2,
          difficulty: 5
        })
        .end((err, res) => {
          console.log(res.status);
          console.log(res.body);
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("/ PUT", () => {
    // Test PUT with  exists subject calculate Avg Rank of Subject
    it("Should Pass", done => {
      chai
        .request(server)
        .put("/matching/editMatchingSubject")
        .send({
          subject: "Compro",
          category: "Software Engineer",
          grade: 1,
          midterm: 3,
          attendance: 2,
          groupWorker: 5,
          difficulty: 2
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("Should Error", done => {
      chai
        .request(server)
        .put("/matching/editMatchingSubject")
        .send({
          subject: "Compro222",
          category: "Software Engineer",
          grade: 2,
          midterm: 2,
          attendance: 1,
          groupWorker: 5,
          difficulty: 2
        })
        .end((err, res) => {
          console.log(res.status);
          console.log(res.body);
          res.should.have.status(400);
          // res.body.should.be.a("object");
          done();
        });
    });
  });
});
