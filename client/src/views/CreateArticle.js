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
      difficulty: 0,

      article: ""
    }
    this.confirmCreateArticle = this.confirmCreateArticle.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }
  handleCatagoryChange = (event) => {
    this.setState({ category: event.target.value })
  }
  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value })
  }
  handleSubjectChange = (event) => {
    this.setState({ subject: event.target.value })
  }
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value })
  }
  handleGradeChange = (event) => {
    this.setState({ grade: event.target.value })
  }
  handleMidtermChange = (event) => {
    this.setState({ midterm: event.target.value })
  }
  handleAttendanceChange = (event) => {
    this.setState({ attendance: event.target.value })
  }
  handleGroupWorkerChange = (event) => {
    this.setState({ groupWorker: event.target.value })
  }
  handleDifficultyChange = (event) => {
    this.setState({ difficulty: event.target.value })
  }

  showConsoleLog() {
    console.log("article name :" + this.state.title)
    console.log("grade : " + this.state.grade);
  }
  confirmCreateArticle() {

    axios.post("http://localhost:8000/",

      {
        "title": this.state.title,
        "category": this.state.category,
        "author": 'zoom',
        "subject": this.state.subject,
        "description": this.state.description,
        "grade": this.state.grade,
        "midterm": 3,
        "attendance": 4,
        "groupWorker": 5,
        "difficulty": 1
        // "grade": this.state.grade,
        // "midterm": this.state.midterm,
        // "attendance": this.state.attendance,
        // "groupWorker": this.state.groupWorker,
        // "difficulty": this.state.difficulty
    })
        

        // "title": "test",
        // "category": "aewaew",
        // "author": "Earth",
        // "subject": "COM OR",
        // "description": "Test kubb",
        // "grade": "3.5",
        // "midterm": 3,
        // "attendance": 4,
        // "groupWorker": 5,
        // "difficulty": 1

        // "description": '',
        // "grade": 'A',
        // "midterm": 0,
        // "attendance": 0,
        // "groupWorker": 0,
        // "difficulty": 0

        
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
                        <input type="text" id="title" value={this.state.title}
                          onChange={this.handleTitleChange.bind(this)} placeholder="ชื่อบทความของคุณ...." />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">หมวดหมู่วิชา</label>
                      </div>
                      <div className="col-75">
                        <select id="category" name="category" value={this.state.category} onChange={this.handleCatagoryChange.bind(this)}>
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
                        <input type="text" id="subject" value={this.state.subject}
                          onChange={this.handleSubjectChange.bind(this)} placeholder="ชื่อวิชา" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">รายละเอียดวิชา</label>
                      </div>
                      <div className="col-75">

                        <textarea rows="5" cols="50" id="description" value={this.state.description}
                          onChange={this.handleDescriptionChange.bind(this)} placeholder="รายละเอียดวิชาของคุณ....">
                        </textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">เกรดที่ได้</label>
                      </div>
                      <div className="col-75">
                      
                        <select id="grade" name="grade" value={this.state.grade} 
                        onChange={this.handleGradeChange.bind(this)}>
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
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">
                    <select id="midterm" name="midterm" value={this.state.midterm} onChange={this.handleMidtermChange.bind(this)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เช็คชื่อ / เข้าเรียน</label>
                  </div>
                  <div className="col-75">
                    <select id="attendance" name="attendance" value={this.state.attendance} onChange={this.handleAttendanceChange.bind(this)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>

                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีงานเดี่ยว / งานกลุ่ม</label>
                  </div>
                  <div className="col-75">
                    <select id="groupWorker" name="groupWorker" value={this.state.groupWorker} onChange={this.handleGroupWorkerChange.bind(this)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ความยากง่ายของเนื้อหา</label>
                  </div>
                  <div className="col-75">
                    <select id="difficulty" name="difficulty" value={this.state.difficulty} onChange={this.handleDifficultyChange.bind(this)}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <button onClick={() => this.showConsoleLog()} >show log</button>
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