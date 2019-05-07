import React, { Component } from "react";
import AllArticleOfSubject from "../views/AllArticleOfSubject";

class ArticleList extends Component {

    showArticle() {
        return this.props.articles && this.props.articles.map(article => (
            <AllArticleOfSubject key={article.title} article={article} />)
        )
    }

    


    render() {
        return (

            
        <div>
        {this.showArticle()}
        </div>

           
            
        );
    }

}

export default ArticleList;