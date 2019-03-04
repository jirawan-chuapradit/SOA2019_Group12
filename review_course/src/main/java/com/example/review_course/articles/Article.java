package com.example.review_course.articles;

public class Article {

    private String articleId;
    private String category;
    private String subject;
    private String stars;
    private String description;
    private String grade;

    public Article() {
    }

    public Article(String articleId, String category, String subject, String stars, String description, String grade) {
        this.articleId = articleId;
        this.category = category;
        this.subject = subject;
        this.stars = stars;
        this.description = description;
        this.grade = grade;
    }

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getStars() {
        return stars;
    }

    public void setStars(String stars) {
        this.stars = stars;
    }
}
