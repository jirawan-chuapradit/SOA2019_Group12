const matchingSubjectDb = require("../models/matchingSubjectSchema");

/**
 * Function:  Create Mockup Data
 * Description: create mock data
 * Method: run on postman
 * precondition: must have knowledge about MatchingSubjectSchema
 * postcondition: subject have been created
 */
exports.addSubject = async (req, res) => {
  console.log(req.body);
  const mathingData = {
    subject: req.body.subject,
    category: req.body.category,
    grade: req.body.grade,
    midterm: req.body.midterm,
    attendance: req.body.attendance,
    groupWorker: req.body.groupWorker,
    difficulty: req.body.difficulty
  };

  await matchingSubjectDb.create(mathingData).then(subject => {
    res.status(201).json({ status: req.body.subject + " registered!!!" });
  });
};

exports.editSubject = async (req, res) => {
  const mathingData = {
    subject: req.body.subject,
    category: req.body.category,
    grade: req.body.grade,
    midterm: req.body.midterm,
    attendance: req.body.attendance,
    groupWorker: req.body.groupWorker,
    difficulty: req.body.difficulty
  };

  await matchingSubjectDb
    .findOne({
      subject: req.body.subject
    })
    .then(s => {
      if (!s) {
        console.log("err: not found subject");
        return res.status(400).json({ message: "Not found" });
      } else {
        matchingSubjectDb.updateOne(
          { subject: mathingData.subject },
          {
            $set: {
              grade: mathingData.grade,
              midterm: mathingData.midterm,
              attendance: mathingData.attendance,
              groupWorker: mathingData.groupWorker,
              difficulty: mathingData.difficulty
            }
          },
          function(err, res) {
            console.log("200 :found subject");
          }
        );
        return res.status(200).json({ message: "update success" });
      }
    });
};

/**
 * Function:  searh data
 */
exports.finding = (req, res) => {
  console.log(req.query);

  matchingSubjectDb
    .find({
      midterm: { $gt: req.query.midterm },
      attendance: { $gt: req.query.attendance },
      groupWorker: { $gt: req.query.groupWorker },
      difficulty: { $gt: req.query.difficulty }
    }, { subject: 1, _id: 0 })
    .then(subject => {
      if (!Array.isArray(subject) || !subject.length) {
        // array does not exist, is not an array, or is empty
        // ⇒ do not attempt to process array
        res.status(200).json({
          status: "Sorry, Can't find the article suitable for you :("
        });
      } else {
        return res.json(subject);
      }
    });
};
