import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import Content from '../components/Content';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import axios from 'axios';




class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            _id: 0,
            title: "",
            subject: "",
            category: "",
            author: "",
            description: "",
            grade: "",
            midterm: 0,
            attendance: 0,
            groupWorker: 0,
            difficulty: 0,
            comment: [],
            __v: 0,
            article : {}
        }
    }



    componentDidMount() {
        const url_string = window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("id");
        console.log("id :" + c);
        this.fetchArticle(c)
        // axios.get('http://localhost:8000/Article/findbyid/' + c).then(res => {
        //     console.log("data :" + res.data);
        //     { this.setState(res.data) }
        // });
    }

    // axios.get("http://localhost:8000/").then(res => {


    fetchArticle = async (c) => {
        const res = await axios.get('http://localhost:8000/Article/findbyid/'+c)
        console.log(res.data)
        
        // this.setState.article(res.data)
        { this.setState({ article: res.data }) }
        //  this.setState( {article :res.data})

        console.log("this.state.article =  " + this.state.article)
    }

    render() {
        return (

            <div>
                <header><a href="/" ><img src={logo} alt="Logo" /> </a> </header>
                <nav>
                    <ul>
                        <li><a href="/">หน้าแรก</a></li>
                        <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>
                        <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>
                        <li><a href="/FindArticle">ค้นหาบทความ</a></li>
                        <li><a href="/Login">เข้าสู่ระบบ</a></li>
                    </ul>
                </nav>
                <section className="sec1" />
                <Content article={this.props.article}/>
                <Comment />
                <CommentForm />
            </div>
        );
    }
}


export default Article;