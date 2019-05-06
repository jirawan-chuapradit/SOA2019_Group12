import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
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


  componentDidMount() {
    // process.env.REACT_APP_API_URL +"/article/"
    // http://localhost:3000/api/article
    axios.get("http://localhost:3002/article").then(res => {
      console.log(res.data);
      { this.setState({ article: res.data }) }
    });
  }

  render() {


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
