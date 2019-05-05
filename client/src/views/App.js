import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import {getHomeArticle} from '../actions/homeAction'
import Thumbnail from '../components/Thumbnail';
import Suggestion from '../components/Suggestion';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}   
     }
  }

  

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     article: [{
  //       attendance: 2,
  //       author: "Tester",
  //       category: "Tester",
  //       comment: [],
  //       description: "Test kubb",
  //       difficulty: 1,
  //       grade: "A",
  //       groupWorker: 5,
  //       midterm: 3,
  //       subject: "Test",
  //       title: "Tester",
  //       _id: 1
  //     }]
  //   };
  // }

  // componentDidMount() {
  //   var article = getHomeArticle();
  //   article.then(result => {
  //     console.log(result.article)
  //     this.setState({
  //       data: result.article,
  //     })
  //   })
  // }

  componentDidMount() {
    // process.env.REACT_APP_API_URL +"/article/"
    axios.get("http://localhost:3000/api/article").then(res => {
      console.log(res.data);
      { this.setState({ article: res.data }) }
    });
  }

  render() {
    const { data } = this.state


    return (
      <div>

        <header><a href="/" ><img src={logo} alt="Logo" /> </a> </header>
        <nav>
          <ul>
            <li><a href="/" className="active" >หน้าแรก</a></li>
            <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>
            <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>
            <li><a href="/FindArticle">ค้นหาบทความ</a></li>
            <li><a href="/Login">เข้าสู่ระบบ</a></li>
          </ul>
        </nav>
        <section className="sec1" />


        <Suggestion />
        {/* <ThumbnailItem 
          articleHome={data}       
         /> */}

        <Thumbnail article={this.state.article} />
      </div>
    );
  }
}



export default App;
