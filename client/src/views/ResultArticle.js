import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
// import AllArticleOfSubject from '../views/AllArticleOfSubject';
import ArticleList from '../components/ArticleList'
import axios from 'axios';
import Header from '../components/Header'
import ResultItem from './ResultItem';

class ResultArticle extends Component {

    state = {
        article: []
    }

    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.article !== this.props.article) {
            this.setState({ article: this.props.article })
        }
    }

    render() {
        const article = this.state.article;
        let counter = 0
        const list = article.map(item => {

            if (counter <= 2) {
                counter += 1
                return <ResultItem key={item._id} item={item} />
            } else {
                return;
            }
        }
        )
        return (

            <div className="w3-row-padding" id="about">
                <div className="w3-center w3-padding-64">
                    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">ผลการค้นหา</span>
                </div>
                <div>
                    {list}
                </div>
            </div>

        );
    }
}

export default ResultArticle;