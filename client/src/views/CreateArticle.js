import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import Header from '../components/Header';
import axios from 'axios';



class CreateArticle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'Cheating',

      title: '',
      category: '',
      author: '',
      subject: '',
      description: '',
      grade: '',
      midterm: 0,
      attendance: 0,
      groupWorker: 0,
      difficulty : 0,

      article: ""
    }
    this.confirmCreateArticle = this.confirmCreateArticle.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    
  }

  // handleTitleChange = (event) => {
  //   this.setState({ title: event.target.value })
  // }
  // handleSubjectChange = (event) => {
  //   this.setState({ subject: event.target.value })
  // }
  // handleDescriptionChange = (event) => {
  //   this.setState({ description: event.target.value })
  // }

  confirmCreateArticle() {
    axios.post("http://localhost:8000/", {
      "title": this.state.title,
      "category": this.state.category,
      "author": this.state.author,
      "subject": this.state.subject,
      "description": this.state.description,
      "grade": this.state.grade,
      "midterm": this.state.midterm,
      "attendance": this.attendance,
      "groupWorker": this.state.groupWorker,
      "difficulty": this.state.difficulty
    })
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }



  render() {


    return (
      <div>
        <Header />

        <section className="Add">
          <div className="container">
            <div className="create_form">
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
                        <input type="text" name="title" value={this.state.title}
                          onChange={this.handleChange} placeholder="ชื่อบทความของคุณ...." />
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
                        <input type="text" name="subject" value={this.state.subject}
                          onChange={this.handleChange} placeholder="ชื่อวิชา" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">รายละเอียดวิชา</label>
                      </div>
                      <div className="col-75">

                        <textarea rows="5" cols="50" name="description" value={this.state.description}
                          onChange={this.handleChange} placeholder="รายละเอียดวิชาของคุณ....">
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

                <button onClick={() => this.confirmCreateArticle()} >ตกลง</button>

              </form>

            </div>
          </div>

        </section>

      </div>

    );
  }

}


export default CreateArticle;