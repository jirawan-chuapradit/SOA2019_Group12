package com.example.review_course.articles.Comments;

public class Comments {


    private String commentId;
    private String name;
    private String star;
    private String description;


    public Comments() {
    }


    public Comments(String description) {

        this.description = description;
    }

    public Comments(String commentId, String name, String star, String description) {
        this.commentId = commentId;
        this.name = name;
        this.star = star;
        this.description = description;
    }

    public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStar() {
        return star;
    }

    public void setStar(String star) {
        this.star = star;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
