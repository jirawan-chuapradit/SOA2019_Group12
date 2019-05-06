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

            <div className="w3-row-padding" id="about">
        <div className="w3-center w3-padding-64">
        </div>
        <div>
        {this.showArticle()}
        </div>
      </div>

           
            
        );
    }

}

export default ArticleList;