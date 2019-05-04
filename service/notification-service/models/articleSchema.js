const mongoose = require("mongoose")
const Schema = mongoose.Schema

var articleSchema = new Schema({
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
        type: Number
    },
    midterm: {
        type: Number
    },
    attendance : {
        type: Number
    },
    groupWorker : {
        type: Number
    },
    difficulty: {
        type: Number
    },
    // comment: [{ 
    //     articleId: Number,
    //     content: String,
    //     star: Number,
    //     profileId: Number 
    // }],
})

module.exports = articleSchema = mongoose.model('articles', articleSchema)