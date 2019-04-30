const express = require("express")
const router = express.Router();
const articleService = require("../service/articleService")
var bodyParser = require('body-parser');

// parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/:id", articleService.getArticlePage)
router.post('/:id', articleService.addComment)

router.get("/", articleService.getAllArticles)
router.post("/", articleService.createArticle)

router.get('/matching', articleService.matching)

module.exports = router;