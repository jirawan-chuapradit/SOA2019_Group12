const express = require("express");
const router = express.Router();
const NotificationService = require("../service/notificationService");
var bodyParser = require("body-parser");

// parse application/json
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true
  })
);

router.post("/addNewSubject", NotificationService.addTheArticles);

module.exports = router;
