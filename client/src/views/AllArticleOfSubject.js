
import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import { Button,Card } from 'react-bootstrap';
import Star from '../components/star'


class AllArticleOfSubject extends Component{

    render(){
      return(
  
        <div>
<header><a href="/" ><img src={logo} alt="Logo"/> </a> </header>
        <nav>
          <ul>
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>

            <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>

            <li><a href="/FindArticle" className="active">ค้นหาบทความ</a></li>

            <li><a href="/Login">เข้าสู่ระบบ</a></li>

            

          </ul>
        </nav>
        <section className="sec1" /> <br/>


        <center>
            <h1>ชื่อวิชา</h1>
            <h3>หมวดสังคม
            , เกรดเฉลี่ยรวม A</h3>


            </center>

            <section className="Add">
        <div className="container">
          <div className="register_form"></div>

            <Card>
  <Card.Body>
    <Card.Title>หัวข้อบทความ</Card.Title>
    <Card.Text >
     <Star fa-pull-left />
    </Card.Text>
    <Button variant="primary">อ่านบทความ</Button>
  </Card.Body>
</Card>;

</div></section>

        
       </div>
      );
    }
  
  }

  export default AllArticleOfSubject;