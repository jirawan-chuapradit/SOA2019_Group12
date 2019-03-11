package com.example.review_course.articles.Comments;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)


public class CommentControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void showComment() {
        Comments response = restTemplate.getForObject(
                "/show/Good Subject", Comments.class);

        // Validate
        assertEquals("Comment = Good Subject", response.getDescription());
    }

}