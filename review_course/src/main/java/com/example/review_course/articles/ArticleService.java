package com.example.review_course.articles;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ArticleService {

    public List<Article> articles = new ArrayList<>(Arrays.asList(
            new Article("001", "สังคมศาสตร์", "ECONOMICS FOR BUSINESS","* * * * *","ดีมากๆ เเรียนเกี่ยวกับแนวคิดการทำงานของระบบเศษฐกิจอ่ะไม่มีเช็คชื่อ ส่งงานอย่างเดียว","A"),
            new Article("002", "สังคมศาสตร์", "ENTREPRENEURSHIP","* * * *","อาจารย์สอนดี แต่เนื้อหาเยอะ ไม่เหมาะกับคนที่ ไม่ชอบอ่านหนังสือ","A"),
            new Article("003", "ภาษา", "ENGLISH FOR MARKETING","* *","เน้นเวิร์คช้อป ไม่เข้าเรียนได้ ส่วนตัวคิดว่าดี แต่ได้ A ยาก","B")
    ));

    public List<Article> getAllArticles(){
        return articles;
    }

//    public Article getArticle(String id){
//        return articles.stream().filter(a -> a.getArticleId().equals(id)).findFirst().get();
//    }
//
// get an article
public Article getArticle(String id){
    return articles.stream().filter(article -> article.getArticleId().equals(id)).findFirst().get();
}

    public void addArticle(Article article){
        articles.add(article);
    }


}
