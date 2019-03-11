package com.example.review_course.articles.Comments;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CommentsService {

    public List<Comments> comments = new ArrayList<>(Arrays.asList(
            new Comments("001", "jug", "* * * *", "good good good"),
            new Comments("002", "aew", "* *", "bad"),
            new Comments("003", "zoom", "*", "mai dai rian naja")
    ));


    public List<Comments> getAllComments(String commentId){
        return comments;
    }
}
