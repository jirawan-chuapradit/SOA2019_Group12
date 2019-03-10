package com.example.review_course.articles;

public class CommentResponse  {

    private String comment;
    private int point;

    public CommentResponse() {

    }

    public CommentResponse(String comment, int point) {
        this.comment = comment;
        this.point = point;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }
}
