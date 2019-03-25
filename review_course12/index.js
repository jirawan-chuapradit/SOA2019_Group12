var users = require('./users');//ประกาศเพื่อให้สามารถเรียกใช้ function ในไฟล์ user.js ได้r users
const config = require('config')

/* โหลด Express มาใช้งาน */
var app = require("express")();
var bodyParser = require("body-parser");
const stores = require("./data/stores")

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const articlesController = require("./src/articles/controller/articlesController")
const authenticationController = require("./src/authentication/controller/authenticationController")
const commentsController = require("./src/comments/controlller/commentsController")
app.use("/articles", articlesController)
app.use("/login", authenticationController)
app.use("/comment", commentsController);

//*** user ***
app.get("/user", function (req,res) {
    res.json(users.findAll());
});

/*
app.get("/user/:id", function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});


app.post("/newuser", function (req, res) {
    var json = req.body;
    res.send("Add new " + json.name + " Completed!");
});
*/

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
const server = app.listen(8080, () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Server running at http://${host}:${port}/`)
})
