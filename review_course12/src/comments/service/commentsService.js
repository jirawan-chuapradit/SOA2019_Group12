// const stores = require("../../../data/storesComment")
const mockComments = require('../../../data/mockComments')
const _ = require('underscore')

exports.getAllComments = (req, res) => {
    // res.json(mockComments)
    console.log(req.query)
    var response = [];

    if ( typeof req.query.id != "undefined"){
        response = mockComืยments.filter(function (store) {
            if (store.id === 1)
                return store;
        });
    } else {
        response = mockComments;
    }
    res.json(response);
}

exports.postNewComment = (req, res) => {
    var json = req.body;
    console.log(json)
    res.send('Add new ' + json.id + ' Completed!'); 
    mockComments.push(req.body)
   
}

exports.getCommentPage = (req, res) => {
    // var mockdata = JSON.parse(mockComments)
    var filtered = _.where(mockComments, {id: parseInt(req.params.id)})
    console.log(typeof req.params.id)
    res.send(filtered)
}