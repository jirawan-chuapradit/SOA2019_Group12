const matchingSubjectDb = require("../models/matchingSubjectSchema");

/**
 * Function:  Create Mockup Data
 * Description: create mock data
 * Method: run on postman
 * precondition: must have knowledge about MatchingSubjectSchema
 * postcondition: subject have been created
 */
exports.addSubject = (req, res) => {
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

  matchingSubjectDb
    .findOne({
      subject: req.body.subject
    })
    .then(subject => {
      if (!subject) {
        matchingSubjectDb
          .create(mathingData)
          .then(subject => {
            res
              .status(200)
              .json({ status: req.body.subject + " registered!!!" });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        //update
        matchingSubjectDb
          .update(
            { subject: mathingData.subject },
            {
              $set: {
                grade: mathingData.grade,
                midterm: mathingData.midterm,
                attendance: mathingData.attendance,
                groupWorker: mathingData.groupWorker,
                difficulty: mathingData.difficulty
              }
            }
          )
          .then(function(result) {
            res.status(200);
            console.log("update success")
          })
          .catch(err => {
            res.send("error: " + err);
            console.log(err)
          });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
};

/**
 * Function:  searh data
 */
exports.finding = (req, res) => {
  console.log(req.query);

  matchingSubjectDb
    .find({
      grade: { $gt: req.body.grade },
      midterm: { $gt: req.body.midterm },
      attendance: { $gt: req.body.attendance },
      groupWorker: { $gt: req.body.groupWorker },
      difficulty: { $gt: req.body.difficulty }
    })

    .then(subject => {
      if (!Array.isArray(subject) || !subject.length) {
        // array does not exist, is not an array, or is empty
        // ⇒ do not attempt to process array
        res.status(200).json({
          status: "Sorry, Can't find the article suitable for you :("
        });
      } else {
        return res.json({ info: subject });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
};

exports.test = (req, res) => {
  return res.json({
    test: 1,
    test2: 2
  });
};
