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
          .send([ { _id: 50,
            category: 'human',
            subject: 'IST50',
            star: 3,
            description: 'ez',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5 },
          { _id: 51,
            category: 'human',
            subject: 'IST50',
            star: 3,
            description: 'ez',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5 },
          { _id: 52,
            category: 'human',
            subject: 'IST50',
            star: 3,
            description: 'ez',
            grade: 3,
            midterm: 3,
            attendance: 3,
            groupWorker: 2,
            difficulty: 5},
          { _id: 53,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3},
          { _id: 54,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3 },
          { _id: 55,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3 },
          { _id: 56,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3},
          { _id: 57,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3 },
          { _id: 58,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3},
          { _id: 59,
            category: 'human',
            subject: 'IST50',
            star: 5,
            description: 'ez',
            grade: 5,
            midterm: 5,
            attendance: 5,
            groupWorker: 5,
            difficulty: 3} ])
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
