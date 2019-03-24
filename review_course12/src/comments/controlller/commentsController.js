const express = require("express")
const router = express.Router();
const CommentService = require("../service/CommentsService")

var bodyParser = require('body-parser');


// parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/", CommentService.getAllComments)
router.post("/newComment", CommentService.postNewComment)
router.get("/:id", CommentService.getCommentPage)

module.exports = router;