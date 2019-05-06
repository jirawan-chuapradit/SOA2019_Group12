const db = require("../model/articleSchema");
const axios = require("axios");
// const server = require('../index')

exports.getArticlePage = (req, res) => {
  async function getArticlePage() {
    var selectedArticle = req.url.substring(7, req.url.length);
    console.log(selectedArticle);
    try {
      selectedArticle = parseInt(selectedArticle, 10);
      const article = await db.find({ _id: selectedArticle });
      // console.log('articles length: ',article.length)
      if (article.length != 0) res.status(200).json(article);
      else res.status(404).json({ error: "Article Not Found" });
    } catch (error) {
      res.status(400).json({ error: "Bad Request" });
    }
  }
  getArticlePage();
};

exports.getAllArticles = (req, res) => {
  console.log("getAllArticle");
  async function getAllArticles() {
    const all = await db.find();
    res.status(200).json(all);
  }
  async function searchArticles() {
    const result = await db.find({
      subject: req.query.subject,
      category: req.query.category
    });
    if (result.length != 0) res.status(200).json(result);
    else
      res.status(404).json({
        error: "Content Not Found"
      });
  }
  if (Object.keys(req.query).length === 0) {
    getAllArticles();
  } else searchArticles();
};

exports.createArticle = (req, res) => {
  console.log("create article");
  const reqBody = req.body;
  async function createArticle(reqBody) {
    const a = await new db({
      title: reqBody.title,
      subject: reqBody.subject,
      category: reqBody.category,
      author: reqBody.author,
      description: reqBody.description,
      grade: reqBody.grade,
      midterm: reqBody.midterm,
      attendance: reqBody.attendance,
      groupWorker: reqBody.groupWorker,
      difficulty: reqBody.difficulty
    });
    a.save(function(err, post) {
      if (err) {
        return res.status(400).json({
          success: false
        });
      } else {
        db.find({
          subject: reqBody.subject
        }).then(subject => {
          console.log(subject);
          //computing
          var size = Object.keys(subject).length;
          console.log("size: " + size);

          var grade1 = 0;
          var midterm1 = 0;
          var attendance1 = 0;
          var groupWorker1 = 0;
          var difficulty1 = 0;

          for (var i = 0; i < size; i++) {
            grade1 += subject[i]["grade"];
            midterm1 += subject[i]["midterm"];
            attendance1 += subject[i]["attendance"];
            groupWorker1 += subject[i]["groupWorker"];
            difficulty1 += subject[i]["difficulty"];
          }

          const mathingData = {
            subject: subject[0]["subject"],
            category: subject[0]["category"],
            grade: grade1 / size,
            midterm: midterm1 / size,
            attendance: attendance1 / size,
            groupWorker: groupWorker1 / size,
            difficulty: difficulty1 / size
          };


          if (size < 2) {
            axios
              .post(
                "http://matching:5050/addMatchingSubject",
                mathingData
              )
              .then(response => {
                console.log(response.data);
                console.log(
                  "GOTO http://matching:5050/addMatchingSubject"
                );
                console.log(response.status);
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            axios
              .put(
                "http://matching:5050/editMatchingSubject",
                mathingData
              )
              .then(response => {
                console.log(response.data);
                console.log(
                  "GoTO http://matching:5050/editMatchingSubject "
                );
                console.log(response.status);
              })
              .catch(error => {
                console.log(error);
              });
          }
        });

        return res.status(201).json({
          success: true
        });

      }
    });
  }
  createArticle(reqBody);
};

exports.addComment = (req, res) => {
  console.log(req.url);
  var path = req.url.substring(7, req.url.length);
  const comment = req.body.comment[0];
  path = Number(path);
  if (isNaN(path)) return res.status(400).json({ error: "Bad Request" });
  else {
    function addComment() {
      db.findOne({ _id: path }).then(function(db) {
        db.comment.push({
          content: comment.content,
          star: comment.star,
          profileId: comment.profileId
        });
        db.save(function(err, post) {
          return res.status(201).json({ success: true });
        });
      });
    }
    addComment();
  }
};

exports.getHomePage = async (req, res) => {
  console.log("get home page");
  const subject = await db
    .find({}, { subject: 1, _id: 0 })
    .limit(3)
    .sort({ _id: -1 });
  res.status(200).json(subject);
};

exports.getAllTitles = async (req, res) => {
  console.log("get All Titles");
  console.log("subject: " + req.params.subject);
  const titles = await db.find(
    { subject: req.params.subject }

  );
  if (!Array.isArray(titles) || !titles.length) {
    return res.status(200).json("Sorry. Title Not found!!");
  } else {
    return res.status(200).json(titles);
  }
};

exports.getTitle = async (req, res) => {
  console.log("get TItle");

  const title = await db.find(
    { _id: req.params.id}
  );

  return res.status(200).json(title);
};

// exports.getArticleDB = (req, res) => {
//     async function getDB() {
//         const result = await db.find()
//         console.log("Length: ",result.length)
//         // console.log(Object.values(result))
//         const arr = Object.values(result)
//         arr.forEach(e => {
//             console.log(typeof JSON.stringify(e))
//             console.log(e)
//         });
//         return res.status(200)
//     }

//     getDB()
// }
