//Testing comments

const comment = require('../comment');

describe('getAllcomment', () => {
    it('should return all comment', () => {

        const result = comment.findAll();

        // 'use strict';

        // const fs = require('fs');
        // fs.readFile('../review_course12/data/mockComments.json', (err, data) => {
        //     if (err) throw err;
        //     let mockComments = JSON.parse(data);
        //     console.log(student);
        //     expect(result).toEqual(mockComments);
        // });

        var fs = require('fs');
        var obj;
        fs.readFile('../review_course12/data/mockComments.json', 'utf8', function (err, data) {
            if (err) throw err;
            obj = JSON.parse(data);
            console.log(obj);
            expect(result).toEqual(obj);
        });
    });
});

// describe('getCommentByArticleID', () => {
//     it('should return Comments By ID of Article', () => {

//         const result = comment.findByArticletId(1);
//         expect(result).toEqual([
//             {
//                 "id_comment": 1,
//                 "id_article": 1,
//                 "content": "รีวิวดีมากเลยครับ",
//                 "stars": "* * *",
//                 "id_profile": 1,

//             },
//             {
//                 "id_comment": 2,
//                 "id_article": 1,
//                 "content": "ขอบคุณมากๆ ค้าาา",
//                 "stars": "* * *",
//                 "id_profile": 1,

//             }
//         ]);


//     });
// });