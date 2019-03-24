// Testing articles

const article = require("../articles");

describe("getAllArticles", () => {
    it("should return all article",  () => {

        // const result = article.findAll();
       
        'use strict';

        const fs = require('fs');
        
        let rawdata = fs.readFileSync('../review_course12/data/mockarticles.json');  
        let mockArticles = JSON.parse(rawdata);  
        console.log(mockArticles);
        expect(mockArticles).toEqual([
            {
                "id": 1,
                "category": "สังคมศาสตร์",
                "subject": "ECONOMICS FOR BUSINESS",
                "stars": "* * * * *",
                "description": "ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว",
                "grade": "A"
            },
            {
                "id": 2,
                "category": "สังคมศาสตร์",
                "subject": "ENTREPRENEURSHIP",
                "stars": "* * * *",
                "description": "อาจารย์สอนดี แต่เนื้อหาเยอะ ไม่เหมาะกับคนที่ ไม่ชอบอ่านหนังสือ",
                "grade": "A"
            },
            {
                "id": 3,
                "category": "ภาษา",
                "subject": "ENGLISH FOR MARKETING",
                "stars": "* *",
                "description": "เน้นเวิร์คช้อป ไม่เข้าเรียนได้ ส่วนตัวคิดว่าดี แต่ได้ A ยาก",
                "grade": "B"
            }
        ])
        

    });
});


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