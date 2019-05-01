const mongoose = require('../config/db')

var articleSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    star: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        enum: ["A", "B", "B+", "C", "C+", "D", "D+", "F"],
        required: true,
    },
    comment: [{ 
        articleId: Number,
        content: String,
        star: Number,
        profileId: Number 
    }],
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article