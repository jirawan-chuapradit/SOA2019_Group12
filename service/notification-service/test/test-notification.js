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

      // await Promise.all([newP.save()]).then(() => {
        chai
          .request(server)
          .post("/computing/addNewSubject")
          .send([ { _id: 44,
            category: 'human',
            subject: 'IST44',
            star: 3,
            description: 'ez',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5,
            __v: 0 },
          { _id: 45,
            category: 'human',
            subject: 'IST44',
            star: 3,
            description: 'ez',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5,
            __v: 0 } ])
          .end((err, res) => {
            console.log("noification: " + res.status);
            console.log(res.body);
            res.should.have.status(200);
            done();
          });
      // });
    }).timeout(15000);
  });
});
