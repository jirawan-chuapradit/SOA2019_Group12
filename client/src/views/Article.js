import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import Content from '../components/Content';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import axios from 'axios';




class Article extends Component {


    constructor(props){
        super(props)
        this.state = {
            article: {}   
           }
    }
    componentDidMount(){

        const url_string = window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("id");
        console.log("id :" + c);
        this.fetchArticle(c)
       
    }



    fetchArticle = async (c) => {
        const res = await axios.get('http://35.247.168.170:5000/api/article/Article/findbyid/'+c)

        console.log(res.data[0])

        this.setState( {article : res.data[0]})
        


    }

    render() {
        console.log(this.state.article)

        return (

            <div>
                <header><a href="/" ><img src={logo} alt="Logo" /> </a> </header>
                <nav>
                    <ul>
                        <li><a href="/">หน้าแรก</a></li>
                        <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>
                        <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>
                        <li><a href="/FindArticle">ค้นหาบทความ</a></li>
                        
                    </ul>
                </nav>
                <section className="sec1" />

                <Content article={this.state.article}/>

                <Comment />
                <CommentForm />
            </div>
        );
    }
}


export default Article;