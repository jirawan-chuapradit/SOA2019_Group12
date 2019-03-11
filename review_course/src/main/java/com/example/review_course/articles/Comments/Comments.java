package com.example.review_course.articles.Comments;

public class Comments {


    private String description;
    private String star;



    public Comments() {
    }

    public Comments(String description) {

        this.description = description;
    }


    public Comments(String description, String star) {
        this.star = star;
        this.description = description;
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
