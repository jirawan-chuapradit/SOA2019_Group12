package com.example.review_course.articles.Comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class CommentController {

    @GetMapping("/show/{description}")
    public  Comments showComment(@PathVariable  String description , String star) {

        return new Comments("Comment = " + description);
    }
}
