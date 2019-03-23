const express = require("express")
const router = express.Router();
const articleService = require("../service/articlesService")

router.get("/", articleService.getAllArticles)
router.post("/", articleService.postNewArticle)
router.get("/:id", articleService.getArticlePage)

module.exports = router;