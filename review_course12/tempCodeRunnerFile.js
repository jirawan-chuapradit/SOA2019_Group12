
    var json = req.body;
    // res.send(res.httpRequestStatusCode);
    res.send('Add new Subject : ' + json.subject + 'to '+res.json(articles.findById(json.id_article)) + ' Completed!');



//*** comment ***