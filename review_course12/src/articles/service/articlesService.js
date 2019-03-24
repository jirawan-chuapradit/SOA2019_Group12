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
    var json = req.body;
    console.log(json)
    res.send('Add new ' + json.category + ' Completed!'); 
   
    // let article = json;

    // var obj = {
    //     articleList: []
    //  };

    //  obj.articleList.push(article);

    //  var json = JSON.stringify(obj);
    mockArticles.push(json)
    // res.status(201).json(req.body)

}

exports.getArticlePage = (req, res) => {
    // var mockdata = JSON.parse(mockArticles)
    var filtered = _.where(mockArticles, {id: parseInt(req.params.id)})
    console.log(typeof req.params.id)
    res.send(filtered)
}