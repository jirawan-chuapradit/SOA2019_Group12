const db = require('../model/articleSchema')
// const axios = require('axios')
// const server = require('../index')

exports.getArticlePage = (req, res) => {
    async function getArticlePage(){
        var selectedArticle = req.url.substring(1, req.url.length)
        try {
            selectedArticle = parseInt(selectedArticle, 10)
            const article = await db.find({ _id: selectedArticle })
            // console.log('articles length: ',article.length)
            if (article.length != 0)
                res.status(200).json(article)
            else
                res.status(404).json({ error: 'Article Not Found' })
        } catch (error) {
            res.status(400).json({error: 'Bad Request'})
        }
    }
    getArticlePage()
}

exports.getAllArticles = (req, res) => {
    async function getAllArticles(){
        const all = await db.find()
        res.status(200).json(all)
    }
    async function searchArticles(){
        const result = await db.find({
            subject: req.query.subject, 
            category: req.query.category
        })
        if (result.length != 0)
            res.status(200).json(result)
        else 
            res.status(404).json({
                error: 'Content Not Found'
            })
    }
    if (Object.keys(req.query).length === 0){ 
        getAllArticles()
    } else searchArticles()
}

exports.createArticle = (req, res) => {
    const reqBody = req.body
    async function createArticle(reqBody){
        const a = await new db({
            title: reqBody.title,
            subject: reqBody.subject,
            category: reqBody.category,
            author: reqBody.author,
            description: reqBody.description,
            grade: reqBody.grade,
            midterm: reqBody.midterm,
            attendance: reqBody.attendance,
            groupWorker: reqBody.groupWorker,
            difficulty: reqBody.difficulty,
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
    createArticle(reqBody)
}

exports.addComment = (req, res) => {
    console.log(req.url)
    var path = req.url.substring(1, req.url.length)
    const comment = req.body.comment[0]
        path = Number(path)
    if (isNaN(path)) return res.status(400).json({error: 'Bad Request'})
    else {
        function addComment(){
            db.findOne({_id: path}).then(function (db) {
                db.comment.push({
                    content: comment.content,
                    star: comment.star,
                    profileId: comment.profileId
                })
                db.save(function (err, post){
                    return res.status(201).json({ success: true })
                })
            })
        }
        addComment()
    }
    
    
    
}

// exports.getArticleDB = (req, res) => {
//     async function getDB() {
//         const result = await db.find()
//         console.log("Length: ",result.length)
//         // console.log(Object.values(result))
//         const arr = Object.values(result)
//         arr.forEach(e => {
//             console.log(typeof JSON.stringify(e))
//             console.log(e)
//         });
//         return res.status(200)
//     }

//     getDB()
// }