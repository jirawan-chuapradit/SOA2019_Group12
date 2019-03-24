// Testing articles

const article = require("../articles");

// describe("getAllArticles", () => {
//     it("should return all article",  () => {

//         // const result = article.findAll();
       
//         'use strict';

//         const fs = require('fs');
        
//         let rawdata = fs.readFileSync('../review_course12/data/mockArticles.json');  
//         let mockArticles = JSON.parse(rawdata);  
//         console.log(mockArticles);
//         expect(result).toEqual(mockArticles)
        

//     });
// });


describe("getArticlesByID", () => {
    it("should return Article By ID",  () => {

        // const result = article.findById(1);
       
        'use strict';

        const fs = require('fs');

        let rawdata = fs.readFileSync('../review_course12/data/mockarticles.json');
        let mockArticles = JSON.parse(rawdata)
        console.log(mockArticles)

        var _ = require("underscore");
        var filtered = _.where(mockArticles, {id: 1});
        console.log(filtered)
        
         expect(filtered).toEqual([
             {"id":1,"category":"สังคมศาสตร์",
             "subject":"ECONOMICS FOR BUSINESS",
             "stars":"* * * * *",
             "description":"ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว",
             "grade":"A"}]);


    });
});