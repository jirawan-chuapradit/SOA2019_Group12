const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MatchingSubjectSchema = new Schema({
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
    }
})

module.exports = MatchingSubject = mongoose.model('mathingSubject', MatchingSubjectSchema)