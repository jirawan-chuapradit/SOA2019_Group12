var users = require("./users");//ประกาศเพื่อให้สามารถเรียกใช้ function ในไฟล์ user.js ได้r users
var articles = require("./articles");
const config = require("config")
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
app.use("/articles", articlesController)
app.use("/login", authenticationController)

app.get("/api/stores", function (req, res) {
    var response = [];

    if ( typeof req.query.category != "undefined"){
        response = stores.filter(function (store) {
            if (store.category === "Human")
                return store;
        });
    } else {
        response = stores;
    }
    res.json(response);
})

/* Routing */
app.get("/", function (req, res) {
    res.send("<h1>Hello Node.js</h1>");
});
app.get("/index", function (req, res) {
    res.send("<h1>This is index page</h1>");
});


//*** user ***
app.get("/user", function (req,res) {
    res.json(users.findAll());
});

app.get("/user/:id", function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});


app.post("/newuser", function (req, res) {
    var json = req.body;
    res.send("Add new " + json.name + " Completed!");
});

//*** articles ***
// app.get("/articles", function (req,res) {
//     res.json(articles.findAll());
// });

app.get("/articles/:id", function (req, res) {
    var id = req.params.id;
    res.json(articles.findById(id));
});

//new Article
app.post("/newarticle", function (req, res) {
    var json = req.body;
    // res.send(res.httpRequestStatusCode);
    res.send("Add new Subject : " + json.subject + " Completed!");
});

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(config.port)
