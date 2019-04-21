const express = require("express")
const router = express.Router();
const articleService = require("../service/articleService")
var bodyParser = require('body-parser');

// parse application/json
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// router.post("/:article", articleService.addComment)
router.get('/test', articleService.addComment)
router.get("/:id", articleService.getArticlePage)
router.get("/", articleService.getAllArticles)
router.post("/", articleService.createArticle)

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

module.exports = router;