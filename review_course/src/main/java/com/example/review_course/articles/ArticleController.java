package com.example.review_course.articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    //create article
//    @GetMapping("/article")
    @RequestMapping("/articles")
    public List<Article> getAllArticles(){
        return articleService.getAllArticles();
    }

//    @RequestMapping("/articles/{id}")
//    public Article getArticle(@PathVariable  String id){
//        return articleService.getArticle(id);
//    }

    @PostMapping(value = "/articles")
    public void addArticle(@RequestBody Article article){
        articleService.addArticle(article);
    }
}
