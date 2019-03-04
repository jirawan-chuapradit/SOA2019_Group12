package com.example.review_course.articles;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ArticleController {

    //create article
//    @GetMapping("/article")
    @RequestMapping("/articles")
    public List<Article> getAllArticles(){
        return Arrays.asList(
                new Article("001", "สังคมศาสตร์", "ECONOMICS FOR BUSINESS","* * * * *","ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว","A"),
                new Article("002", "สังคมศาสตร์", "ENTREPRENEURSHIP","* * * *","อาจารย์สอนดี แต่เนื้อหาเยอะ ไม่เหมาะกับคนที่ ไม่ชอบอ่านหนังสือ","A"),
                new Article("003", "ภาษา", "ENGLISH FOR MARKETING","* *","เน้นเวิร์คช้อป ไม่เข้าเรียนได้ ส่วนตัวคิดว่าดี แต่ได้ A ยาก","B")
                );
    }
}
