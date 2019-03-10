package com.example.review_course.articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    //    get an Article
    @RequestMapping("/articles/{id}")
    public Article getArticle(@PathVariable  String id){
        return articleService.getArticle(id) ;
    }


    //create
    @PostMapping(value = "/articles")
    public void addArticle(@RequestBody Article article){
        articleService.addArticle(article);
    }

    //update
//    @PutMapping(value = "/articles/{id}")
//    public void updateArticle(@RequestBody Article article, @PathVariable String id){
//        articleService.updateArticle(id, article);
//    }

    //delete
    @DeleteMapping(value = "/articles/{id}")
    public void deleteArticle(@PathVariable String id){
        articleService.deleteArticle(id);
    }
}
