package com.example.review_course.articles;

import com.example.review_course.articles.Comments.Comments;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class ArticleControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void getArticle() {
        Article response = restTemplate.getForObject(
                "http://localhost:8080/articles/001",Article.class);
//
//         Validate
        assertEquals("001", response.getArticleId());

    }
}
