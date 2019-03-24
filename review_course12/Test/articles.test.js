//Testing articles

const article = require("../articles");

describe("getAllArticles", () => {
    it("should return all article",  () => {

        const result = article.findAll();

        // 'use strict';

        // const fs = require('fs');

        // fs.readFile('../review_course12/data/mockArticles.json', (err, data) => {
        //     if (err) throw err;
        //     let mockArticles  = JSON.parse(data);
        //     console.log(mockArticles);
        //     expect(result).toEqual(mockArticles);
        // });

    
            expect(result).toEqual(" ");
        

    });
});


describe("getArticlesByID", () => {
    it("should return Article By ID",  () => {

        const result = article.findById(1);
        expect(result).toEqual({"id":1,"category":"สังคมศาสตร์","subject":"ECONOMICS FOR BUSINESS","stars":"* * * * *","description":"ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว","grade":"A"});


    });
});