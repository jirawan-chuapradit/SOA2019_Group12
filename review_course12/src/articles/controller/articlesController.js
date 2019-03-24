const express = require("express")
const router = express.Router();
const articleService = require("../service/articlesService")
var bodyParser = require('body-parser');


// parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


router.get("/", articleService.getAllArticles)
router.post("/newArticle", articleService.postNewArticle)
router.get("/:id", articleService.getArticlePage)

module.exports = router;