import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'




class CreateArticle extends Component{

  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'Cheating'
    }
  }
  

    render(){
      

      return(
  
<div>
<header><a href="/" ><img src={logo} alt="Logo"/> </a> </header>
        <nav>
          <ul>
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="/CreateArticle" className="active">สร้างบทความใหม่</a></li>

            <li><a href="/Matching">หาวิชาที่เหมาะกับฉัน</a></li>

            <li><a href="/FindArticle">ค้นหาบทความ</a></li>

            <li><a href="/Login">เข้าสู่ระบบ</a></li>

            

          </ul>
        </nav>
        <section className="sec1" />

<section className="Add">
        <div className="container">
          <div className="register_form">
          <center>
            <h3><font face="Fc active" size={17}>สร้างบทความใหม่</font></h3></center>
            <form className="form_area" id="myForm"> 
              <div className="row">
                <div className="col-lg-12 form_group">
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">ชื่อบทความ</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="title" name="firstname" placeholder="ชื่อบทความของคุณ...." />
                    </div>
                  </div>

                   <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">หมวดหมู่วิชา</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                      <option value="วิชาเลือกกลุ่มวิชาภาษา">วิชาเลือกกลุ่มวิชาภาษา</option>
                      <option value="วิชาเลือกกลุ่มวิชามนุษย์ศาสตร์">วิชาเลือกกลุ่มวิชามนุษย์ศาสตร์</option>
                      <option value="วิชาเลือกกลุ่มวิชาสังคมศาสตร์">วิชาเลือกกลุ่มวิชาสังคมศาสตร์</option>
                        <option value="วิชาศึกษาทั่วไปกลุ่มวิชาคณิตศาสตร์และวิทยาศาสตร์">วิชาศึกษาทั่วไปกลุ่มวิชาคณิตศาสตร์และวิทยาศาสตร์</option>
                        <option value="วิชาเลือกเสรี">วิชาเลือกเสรี</option>
                        <option value="วิชาเลือกกลุ่มคุณค่าแห่งชีวิต">วิชาเลือกกลุ่มคุณค่าแห่งชีวิต</option>
                        <option value="วิชาเลือกกลุ่มวิถีแห่งสังคม">วิชาเลือกกลุ่มวิถีแห่งสังคม</option>
                        <option value="วิชาเลือกกลุ่มศาสตร์แห่งความคิด">วิชาเลือกกลุ่มศาสตร์แห่งความคิด</option>
                        <option value="วิชาเลือกกลุ่มศิลปแห่งการจัดการ">วิชาเลือกกลุ่มศิลปแห่งการจัดการ</option>
                        <option value="วิชาเลือกกลุ่มภาษาและการสื่อสาร">วิชาเลือกกลุ่มภาษาและการสื่อสาร</option>



                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">ชื่อวิชา</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="subject" name="subject" placeholder="ชื่อวิชา" />
                    </div>
                  </div> 
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">รายละเอียดวิชา</label>
                    </div>
                    <div className="col-75">

                    <textarea rows = "5" cols = "50" name = "description" placeholder="รายละเอียดวิชาของคุณ....">
         </textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="name">เกรดที่ได้</label>
                    </div>
                    <div className="col-75">
                      <select id="subject" name="subject">
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="D+">D+</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                      </select>
                    </div>
                  </div>
                </div>
             
              </div>

              <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีงานเดี่ยว / งานกลุ่ม</label>
                  </div>
                  <div className="col-75">
                    <select id="้homework" name="้homework">
                      <option value="้homework1">1</option>
                      <option value="้homework2">2</option>
                      <option value="้homework3">3</option>
                      <option value="้homework4">4</option>
                      <option value="้homework5">5</option>
                      <option value="้homework6">6</option>
                


                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">
                    <select id="midterm" name="midterm">
                    <option value="้midterm1">1</option>
                      <option value="้midterm2">2</option>
                      <option value="้midterm3">3</option>
                      <option value="้midterm4">4</option>
                      <option value="้midterm5">5</option>
                      <option value="้midterm6">6</option>
                     
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">
                    <select id="midterm" name="midterm">
                    <option value="้midterm1">1</option>
                      <option value="้midterm2">2</option>
                      <option value="้midterm3">3</option>
                      <option value="้midterm4">4</option>
                      <option value="้midterm5">5</option>
                      <option value="้midterm6">6</option>
                      <option value="้midterm7">7</option>
                      <option value="้midterm8">8</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เช็คชื่อ / เข้าเรียน</label>
                  </div>
                  <div className="col-75">
                    <select id="check" name="check">
                    <option value="้check1">1</option>
                      <option value="้check2">2</option>
                      <option value="้check3">3</option>
                      <option value="้check4">4</option>
                      <option value="้check5">5</option>
                      <option value="้check6">6</option>
                      <option value="้check7">7</option>
                      <option value="้check8">8</option>
                    </select>
                  </div>
                </div>

                <button >ตกลง</button>

            </form>

          </div>
        </div>
                
        </section>
      

        </div>
        
      );
    }
  
  }


  export default CreateArticle;