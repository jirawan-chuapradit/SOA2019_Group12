const express = require("express");
const router = express.Router();
const matchingSubjectService = require("../service/mathingSubjectService");

var bodyParser = require("body-parser");

/**
 * parse application/json
 */
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**
 * route
 */
router.get("/", matchingSubjectService.finding);
router.post("/addMatchingSubject", matchingSubjectService.addSubject);
router.put("/editMatchingSubject", matchingSubjectService.editSubject);


module.exports = router;
