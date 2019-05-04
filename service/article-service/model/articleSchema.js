const mongoose = require('../config/db')
const AutoIncrement = require('mongoose-sequence')(mongoose)

var articleSchema = mongoose.Schema({
    _id: Number,
    title : {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        enum: ["4", "3", "3.5", "2", "2.5", "1", "1.5", "0"],
        required: true,
    },
    midterm: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: true
    },
    attendance: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: true
    },
    groupWorker: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: true
    },
    difficulty: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: true
    },
    comment: [{ 
        content: String,
        star: Number,
        profileId: Number 
    }],
}, { _id: false })

articleSchema.plugin(AutoIncrement)

const Article = mongoose.model('Article', articleSchema)

module.exports = Article