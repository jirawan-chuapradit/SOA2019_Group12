import React, { Component }  from 'react';
import logo from '../assets/image/logo.png';

class Header extends Component{
    
    render(){
        return(
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
        </div>
        )
    }
}
export default Header;