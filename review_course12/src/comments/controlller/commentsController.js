const express = require("express")
const router = express.Router();
const CommentService = require("../service/CommentsService")

router.get("/", CommentService.getAllComments)
router.post("/", CommentService.postNewComment)
router.get("/:id", CommentService.getCommentPage)

module.exports = router;