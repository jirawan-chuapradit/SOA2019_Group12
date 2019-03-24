// const stores = require("../../../data/stores")
const mockArticles = require('../../../data/mockArticles')
const _ = require('underscore')
// var app = require('express')();
// var bodyParser = require('body-parser');

// // parse application/json
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

exports.getAllArticles = (req, res) => {
    var response = [];

    if ( typeof req.query.category != "undefined"){
        response = mockArticles.filter(function (store) {
            if (store.category === req.query.category){
                console.log(store.subject)
                console.log(req.query.subject)
                if (store.subject === req.query.subject){
                    return store;
                }
            }
        });
    } else {
        response = mockArticles;
    }
    res.json(response);
}

exports.postNewArticle = (req, res) => {
    
    
    var json = req.body;
    console.log(json)
    res.send('Add new ' + json.name + ' Completed!'); 
    
    // const body = req.body.Body
   
    // mockArticles.push(req.body)
    // res.status(201).json(req.body)
}

exports.getArticlePage = (req, res) => {
    // var mockdata = JSON.parse(mockArticles)
    var filtered = _.where(mockArticles, {id: parseInt(req.params.id)})
    console.log(typeof req.params.id)
    res.send(filtered)
}