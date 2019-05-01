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
router.get("/test", matchingSubjectService.test)

router.use((req, res, next) => {
  console.log("called: ", req.path);
  next();
});

module.exports = router;
