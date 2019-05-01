const axios = require("axios");

exports.getTheArticles = (req, res) => {
  console.log("get The Articles");
  // console.log(req.query)
  // console.log(req.body/)

  const obj = req.body;
  console.log(obj);
  //computing
  var size = Object.keys(req.body).length;
  console.log("size: " + size);

  var grade = 0;
  var midterm = 0;
  var attendance = 0;
  var groupWorker = 0;
  var difficulty = 0;
  for (var i = 0; i < size; i++) {
    grade += obj[i]["grade"];
    midterm += obj[i]["midterm"];
    attendance += obj[i]["attendance"];
    groupWorker += obj[i]["groupWorker"];
    difficulty += obj[i]["difficulty"];
  }

  const mathingData = {
    subject: obj[0]["subject"],
    category: obj[0]["category"],
    grade: grade / size,
    midterm: midterm / size,
    attendance: attendance / size,
    groupWorker: groupWorker / size,
    difficulty: difficulty / size
  };

  axios.post('http://localhost:5050/matching/addMatchingSubject', mathingData)
            .then(response => {
            //   console.log(response.data.url);
            //   console.log(response.data.explanation);
              console.log(response.data);
              console.log('run')
              
            })
            .catch(error => {
              console.log(error);
            });
    

};
