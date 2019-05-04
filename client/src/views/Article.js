import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import Content from '../components/Content';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';




class Article extends Component {

    //   constructor(props) {
    //     super(props)
    //     this.state = {
    //       selectedView: 'Cheating'
    //     }
    //   }
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
                <Content />
                <Comment />
                <CommentForm />
            </div>
        );
    }
}


export default Article;