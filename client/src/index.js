import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App'; //import component from App file (with App name)
import {Router ,Route , browserHistory} from 'react-router'
import FindArticle from './views/FindArticle';
import FindArticleZoom from './views/FindArticleZoom';
import Matching from './views/Matching';
import CreateArticle from './views/CreateArticle';
import Login from './views/Login';
import AllArticleOfSubject from './views/AllArticleOfSubject';
import star from './components/star';
import Article from './views/Article';




ReactDOM.render(

    <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/FindArticle" component={FindArticle}/>
    <Route path="/Matching" component={Matching}/>
    <Route path="/star" component={star}/>
    <Route path="/CreateArticle" component={CreateArticle}/>
    <Route path="/Login" component={Login}/>
    <Route path="/AllArticleOfSubject" component={AllArticleOfSubject}/>
    <Route path="/Article" component={Article}/>

    <Route path="/FindArticleZoom" component={FindArticleZoom}/>








    </Router>

    , document.getElementById('root')
    // <App />,
    // document.getElementById('root') //get App show in root ID
);


