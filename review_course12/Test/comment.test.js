//Testing comments

const comment = require('../comment');

// describe('getAllcomment', () => {
//     it('should return all comment', () => {

//         // const result = comment.findAll();
//         // console.log(result)


//         var _ = require("underscore");

//         'use strict';

//         const fs = require('fs');

//         let rawdata = fs.readFileSync('../review_course12/data/mockComments.json');
//         let mockCommentS = JSON.parse(rawdata);
//         console.log(mockCommentS);

//         var filtered = _.where(mockCommentS, {id_article: "1"});
//         console.log(filtered)

//         // expect(result).toEqual(mockCommentS)
//     });
// });

describe('getCommentByArticleID', () => {
    it('should return Comments By ID of Article', () => {

        
        var _ = require("underscore");

        'use strict';

        const fs = require('fs');

        let rawdata = fs.readFileSync('../review_course12/data/mockcomments.json');
        let mockCommentS = JSON.parse(rawdata);
        console.log(mockCommentS);

        var filtered = _.where(mockCommentS, {id_article: 1});
        console.log(filtered)

        // const result = comment.findByArticletId(1);
        
        expect(filtered).toEqual([
            {
                "id": 1,
                "id_article": 1,
                "content": "รีวิวดีมากเลยครับ",
                "stars": "* * *",
                "id_profile": 1,

            },
            {
                "id": 2,
                "id_article": 1,
                "content": "ขอบคุณมากๆ ค้าาา",
                "stars": "* * *",
                "id_profile": 1,

            }
        ]);


    });
});