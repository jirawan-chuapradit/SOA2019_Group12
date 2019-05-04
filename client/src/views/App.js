import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import Thumbnail from '../components/Thumbnail';
import Suggestion from '../components/Suggestion';

class App extends Component {

 

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
        <Thumbnail />
        </div>
          );
        }
      }
      

      
export default App;
