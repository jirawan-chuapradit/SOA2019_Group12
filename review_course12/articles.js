var articles = [
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
];

/* ฟังก์ชันสำหรับหา user ทั้งหมดในระบบ ในส่วนนี้ผมจะให้ส่งค่า users ทั้งหมดกลับไปเลย */
module.exports.findAll = function() {
    return articles;
};

module.exports.findById = function (id) {
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id)
            return articles[i];
    }
};
