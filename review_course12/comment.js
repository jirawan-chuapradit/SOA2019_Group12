var comment = [
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
 
    },
    {
        "id_comment": 3,
        "id_article": 3,
        "content": "ไม่คิดแบบนี้นะ",
        "stars": "*",
        "id_profile": 2,

    },
    {
        "id_comment": 4,
        "id_article": 3,
        "content": "สำหรับเราว่าโอเคเลย",
        "stars": "***",
        "id_profile": 1

    }
];

module.exports.findAll = function() {
    return comment;
};

module.exports.findById = function (id) {
    for (var i = 0; i < comment.length; i++) {
        if (comment[i].id_comment == id)
            return comment[i];
    }
};
