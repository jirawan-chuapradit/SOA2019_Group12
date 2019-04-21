const db = require('../model/articleSchema')

exports.getArticlePage = (req, res) => {
    async function getArticlePage(){
        const selectedArticle = req.url.substring(1, req.url.length)
        const article = await db.find({ _id: selectedArticle })
        res.status(200).json(article)
    }
    getArticlePage()
}

exports.getAllArticles = (req, res) => {
    async function getAllArticles(){
        const all = await db.findOne()
        res.status(200).json(all)
    }
    async function searchArticles(){
        const result = await db.find({
            subject: req.query.subject, 
            category: req.query.category
        })
        res.status(200).json(result)
    }
    if (Object.keys(req.query).length === 0){ 
        getAllArticles()
    } else searchArticles()
}

exports.createArticle = (req, res) => {
    const reqBody = req.body
    const a = new db({
        _id: reqBody._id,
        category: reqBody.category,
        subject: reqBody.subject,
        star: reqBody.star,
        description: reqBody.description,
        grade: reqBody.grade,
        comment: {
            articleId: reqBody.comment.articleId,
            content: reqBody.comment.content,
            star: reqBody.comment.star,
            profileId: reqBody.comment.profileId
        }
    })
    a.save(function(err, post) {
        if (err) {
            return res.status(400).json({
                success: false
            })
        } else {
        return res.status(201).json({
            success: true
        })
    }
    })
}

exports.addComment = (req, res) => {
    console.log(req.body)
    // async function addComment(){

        // db.findOne({subject: 'entrepreneurship'}).then( function(db) {
        //     db.comment.push({
        //         articleId: 2,
        //         content: "comment3",
        //         star: 3,
        //         profileId: 123123
        //     })

        //     db.save()
        // })

    // addComment()
}