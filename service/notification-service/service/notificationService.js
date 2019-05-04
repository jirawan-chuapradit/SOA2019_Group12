const axios = require("axios");

exports.addTheArticles =   (req, res) => {
  console.log("get The Articles");

  const obj = req.body;
  console.log(obj);

  //computing
  var size = Object.keys(req.body).length;
  console.log("size: " + size);

  var grade1 = 0;
  var midterm1 = 0;
  var attendance1= 0;
  var groupWorker1 = 0;
  var difficulty1= 0;
  
   for (var i = 0; i < size; i++) {
    grade1 += obj[i]["grade"];
    midterm1 += obj[i]["midterm"];
    attendance1 += obj[i]["attendance"];
    groupWorker1 += obj[i]["groupWorker"];
    difficulty1 += obj[i]["difficulty"];
  }
  

  const mathingData = {
    subject: obj[0]["subject"],
    category: obj[0]["category"],
    grade: grade1 / size,
    midterm: midterm1 / size,
    attendance: attendance1 / size,
    groupWorker: groupWorker1 / size,
    difficulty: difficulty1 / size
  };

  res.status(200);

  if(size < 2 ){
    axios.post('http://localhost:5050/matching/addMatchingSubject', mathingData)
    .then(response => {
      console.log(response.data);
      console.log('GOTO http://localhost:5050/matching/addMatchingSubject')
      
    })
    .catch(error => {
      console.log(error);
    });
  }else{
    axios.put('http://localhost:5050/matching/editMatchingSubject', mathingData)
    .then(response => {
      console.log(response.data);
      console.log('GoTO http://localhost:5050/matching/editMatchingSubject ')
      
    })
    .catch(error => {
      console.log(error);
    });
  }
  
};
