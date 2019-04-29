const matchingSubjectDb = require("../models/matchingSubjectSchema");

/**
 * Function:  Create Mockup Data
 * Description: create mock data
 * Method: run on postman
 * precondition: must have knowledge about MatchingSubjectSchema
 * postcondition: subject have been created
 */
exports.addSubject = (req, res) => {
  const mathingData = {
    _id: req.body._id,
    subject: req.body.subject,
    category: req.body.category,
    grade: req.body.grade,
    midterm: req.body.midterm,
    attendance: req.body.attendance,
    groupWorker: req.body.groupWorker,
    difficulty: req.body.difficulty
  };

  matchingSubjectDb.findOne({
    subject: req.body.subject
  })
    .then(subject => {
      if (!subject) {
        matchingSubjectDb.create(mathingData)
          .then(subject => {
            res.status(200).json({ status: req.body.subject + " registered!!!" });
          })
          .catch(err => {
            res.send("error: " + err);
          });
      } else {
        res.status(200).json({ error: req.body.subject + " already exists" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
};

/**
 * Function:  searh data
 */
exports.finding = (req,res) =>{
  
  matchingSubjectDb.find({
    grade: { $gt: req.body.grade },
    midterm: { $gt: req.body.midterm},
    attendance :{ $gt: req.body.attendance},
    groupWorker :{ $gt: req.body.groupWorker},
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
        res.status(200).json({ status: subject });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
}

