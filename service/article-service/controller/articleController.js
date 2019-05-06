const express = require("express")
const router = express.Router();
const articleService = require("../service/articleService")
var bodyParser = require('body-parser');


// parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get("/title/:id", articleService.getArticlePage)
router.post('/title/:id', articleService.addComment)

router.get("/", articleService.getAllArticles)
router.post("/", articleService.createArticle)

router.get("/Home", articleService.getHomePage)
router.get("/Article/:subject", articleService.getAllTitles)
// router.get("/Article/:subject/:title", articleService.getTitle)
router.get("/Article/findbyid/:id", articleService.getTitle)

// router.get('/get/db', articleService.getArticleDB)

module.exports = router;