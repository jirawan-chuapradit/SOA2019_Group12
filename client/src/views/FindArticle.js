import React from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
// import AllArticleOfSubject from '../views/AllArticleOfSubject';
import ArticleList from '../components/ArticleList'
import axios from 'axios';
import Header from '../components/Header';


class FindArticle extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'วิชาเลือกกลุ่มวิชาภาษา',
      data: {},
      value: 'COM OR',
      article: []
    }
  }

//   componentWillMount() {

//     axios.get("http://localhost:8000/Article/"+ this.state.value).then(res => {

//           console.log(res.data);
//           { this.setState({ article: res.data }) }
//   });
// }

  // confirmCreateFinding(){
  //   axios.get("http://localhost:8000/Article/"+ this.state.value).then(res => {

  //     console.log(res.data);
  //     { this.setState({ article: res.data }) }

  //       // <ArticleList articles={this.state.article} />


  //   });


  // }

  confirmCreateFinding = async (e) => {
    e.preventDefault();
    
  }



  handleChange = async (event) => {
    console.log(event.target.value + "hello")
    this.setState({ value: event.target.value });
    await axios.get("http://35.247.168.170:5000/api/article/Article/"+ event.target.value).then(res => {
          console.log(res.data);
          { this.setState({ article: res.data }) }
  });
  }
    


  render() {
    console.log(this.state.article)


    const { selectedView } = this.state
    const VIEWS = [
      {
        category: "วิชาเลือกกลุ่มวิชาภาษา",
        subject: ["","DEVELOPMENT OF READING AND WRITING SKILLS IN ENGLISH", "ENGLISH FOR MANAGEMENT"
          , "ENGLISH FOR PROFESSIONAL PURPOSES", "ENGLISH SKILL DEVELOPMENT FOR LIFE-LONG LEARNING"]
      },
      {
        category: 'วิชาเลือกกลุ่มวิชามนุษย์ศาสตร์',
        subject: ["","PERSONALITY AND MENTAL HEALTH DEVELOPMENT", "HOLISTIC HEALTH DEVELOPMENT", "HUMAN AND TOURISM",
          "HAPPINESS SKILLS", "ENHANCEMENT OF QUALITY OF LIFE"]
      },
      {
        category: "วิชาเลือกกลุ่มวิชาสังคมศาสตร์",
        subject: ["","ECONOMICS FOR BUSINESS", "ENTREPRENEURSHIP", "GENERAL BUSINESS",
          "ENGINEERING AND TECHNOLOGY LAWS", "THAI INTELLECTUAL PROPERTY", "GENERAL BUSINESS"]
      },
      {
        category: "วิชาศึกษาทั่วไปกลุ่มวิชาคณิตศาสตร์และวิทยาศาสตร์",
        subject: ["","MATHEMATICS IN DAILY LIFE", "INTRODUCTION TO FOOD NUTRITION", "PHYSICS FOR DAILY LIFE",
          "FOOD SCIENCE IN DAILY LIFE"]
      },
      {
        category: "วิชาเลือกเสรี",
        subject: ["","ENGLISH FOR SCIENCE AND TECHNOLOGY", "BAMBOO ARCHITECTURE", "TECHNOLOGY PHOTOGRAPHY", "INDIVIDUAL STUDY"]
      },
      {
        category: "วิชาเลือกกลุ่มคุณค่าแห่งชีวิต",
        subject: ["","DESIGNING YOUR LIFE", "PHOTOGRAPHY APPRECIATION", "PHOTOGRAPHY APPRECIATION", "MEDITATION FOR LIFE DEVELOPMENT", "FILM APPRECIATION"]
      },
      {
        category: "วิชาเลือกกลุ่มวิถีแห่งสังคม",
        subject: ["","MILITARY SCIENCE", "THAI ASTROLOGY", "ASEAN STUDY", "THAI ASTROLOGY"]
      },
      {
        category: "วิชาเลือกกลุ่มศาสตร์แห่งความคิด",
        subject: ["","SERIES IN DAILY LIFE", "FUN WITH AI", "INTEGRATED THINKING"]
      },
      {
        category: "วิชาเลือกกลุ่มศิลปแห่งการจัดการ",
        subject: ["","MODERN ENTREPRENEUR", "SOCIAL ENTREPRENEUR", "MODERN MANAGEMENT AND LEADERSHIP"]
      }, {
        category: "วิชาเลือกกลุ่มภาษาและการสื่อสาร",
        subject: ["","WRITING AND SPEAKING IN THE PROFESSIONS", "ENGLISH FOR WORK PREPARATION", "ENGLISH FOR MARKETING"]
      }

    ]

    const getMajorMethod = () => {
      const view = VIEWS.filter(({ category }) => category === selectedView)[0]
      return (
        <div>
          <div className="container">
            <div className="finding_form"></div>
            <form className="form_area" id="myForm">

              <div className="col-lg-12 form_group">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="subject">ชื่อวิชา</label>
                  </div>
                  <div className="col-75">

                    <select value={this.state.value} onChange={this.handleChange} >
                      {view.subject.map(m => <option>{m}</option>)}
                    </select> </div>

                </div> </div>
            

            </form> </div>

          <ArticleList articles={this.state.article} />

          {/* <AllArticleOfSubject article={this.state.article} /> */}

        </div>
      )
    }
    return (
      <div>
        <Header />


        <br /><br /><br />
        <div className="container">
          <div className="finding_form"></div>
          <form className="form_area" id="myForm" method="post">

            <center><h3><font face="Fc active" size={17}>ค้นหาวิชาที่ต้องการ</font></h3></center>

            <div className="col-lg-12 form_group">
              <div className="row">
                <div className="col-25">
                  <label htmlFor="category">หมวดหมู่วิชา</label>
                </div>
                <div className="col-75">

                  <select onChange={(e) => this.setState({ selectedView: e.target.value })}>
                    {VIEWS.map(({ category }) => <option value={category}>{category}</option>)}
                  </select>

                </div>

              </div> </div> </form></div>



        {getMajorMethod()}
      </div>
    )
  }
}

export default FindArticle;