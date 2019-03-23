// const stores = require("../../../data/stores")
const mockArticles = require('../../../data/mockArticles')
const _ = require('underscore')

exports.getAllArticles = (req, res) => {
    // res.json(mockArticles)
    console.log(req.query)
    var response = [];

    if ( typeof req.query.id != "undefined"){
        response = mockArticles.filter(function (store) {
            if (store.id === 1)
                return store;
        });
    } else {
        response = mockArticles;
    }
    res.json(response);
}

exports.postNewArticle = (req, res) => {
    mockArticles.push(req.body)
    res.status(201).json(req.body)
}

exports.getArticlePage = (req, res) => {
    // var mockdata = JSON.parse(mockArticles)
    var filtered = _.where(mockArticles, {id: parseInt(req.params.id)})
    console.log(typeof req.params.id)
    res.send(filtered)
}