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
      group_worker: 0,
      difficulty: 0,
      article: ""
    }
    this.confirmCreateArticle = this.confirmCreateArticle.bind(this);
  }

  showConsoleLog() {
    console.log("article name :" + this.state.title)
    console.log("grade : " + this.state.grade);
  }

  confirmCreateArticle = async () => {
      await axios.post("http://localhost:8000/",
      {
        "title": this.state.title,
        "category": this.state.category,
        "author": 'zoom',
        "subject": this.state.subject,
        "description": this.state.description,
        "grade": this.state.grade,
        "midterm": this.state.midterm,
        "attendance": this.state.attendance,
        "groupWorker": this.state.group_worker,
        "difficulty": this.state.difficulty
    }).then(res => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChanged = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
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
                        <input type="text" id="title" name="title" value={this.state.title}
                          onChange={this.onChanged} placeholder="ชื่อบทความของคุณ...." />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">หมวดหมู่วิชา</label>
                      </div>
                      <div className="col-75">
                        <select id="category" name="category" value={this.state.category} onChange={this.onChanged}>
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
                          onChange={this.onChanged} placeholder="ชื่อวิชา" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">รายละเอียดวิชา</label>
                      </div>
                      <div className="col-75">

                        <textarea rows="5" cols="50" name="description" value={this.state.description}
                          onChange={this.onChanged} placeholder="รายละเอียดวิชาของคุณ....">
                        </textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="name">เกรดที่ได้</label>
                      </div>
                      <div className="col-75">
                      
                        <select id="grade" name="grade" value={this.state.grade} 
                        onChange={this.onChanged}>
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
                    <select id="midterm" name="midterm" value={this.state.midterm} onChange={this.onChanged}>
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
                    <select id="attendance" name="attendance" value={this.state.attendance} onChange={this.onChanged}>
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
                    <select id="groupWorker" name="group_worker" value={this.state.group_worker} onChange={this.onChanged}>
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
                    <select id="difficulty" name="difficulty" value={this.state.difficulty} onChange={this.onChanged}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
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