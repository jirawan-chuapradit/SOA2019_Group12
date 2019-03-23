//Testing comments

const comment = require('../comment');

describe('getAllcomment', () => {
    it('should return all comment',  () => {

        const result = comment.findAll();

        expect(result).toEqual([
            {
                "id_comment": 1,
                "id_article": 2,
                "content": "รีวิวดีมากเลยครับ",
                "stars": "* * *",
                "id_profile": 1,
        
            },
            {
                "id_comment": 2,
                "id_article": 2,
                "content": "ขอบคุณมากๆ ค้าาา",
                "stars": "* * *",
                "id_profile": 1,
         
            },
            {
                "id_comment": 3,
                "id_article": 3,
                "content": "ไม่คิดแบบนี้นะ",
                "stars": "*",
                "id_profile": 2,
        
            }
        ]);

    });
});

describe('getCommentByArticleID', () => {
    it('should return Comments By ID of Article',  () => {

        const result = comment.findByArticletId(1);
        expect(result).toEqual([
            {
                "id_comment": 1,
                "id_article": 1,
                "content": "รีวิวดีมากเลยครับ",
                "stars": "* * *",
                "id_profile": 1,
        
            },
            {
                "id_comment": 2,
                "id_article": 1,
                "content": "ขอบคุณมากๆ ค้าาา",
                "stars": "* * *",
                "id_profile": 1,
         
            }
        ]);


    });
});