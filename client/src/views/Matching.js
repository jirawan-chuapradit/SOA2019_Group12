import React, { Component } from 'react';
import logo from '../assets/image/logo.png'
import '../assets/css/create.css';
import '../assets/css/header.css';
import Star from '../components/star'
import MatchingList from '../components/MatchingList'

import axios from 'axios';

import StarRatingComponent from 'react-star-rating-component';


class Matching extends Component{

  constructor(props) {
    super(props);
    this.state = {
      midterm: 4,
      attendance: 4,
      groupWorker : 4,
      difficulty : 4,
      data: {}   

    };
  }

 
  onAttendanceClick(nextValue, prevValue, name) {
    this.setState({attendance: nextValue});
  }
  onMidtermClick(nextValue, prevValue, name) {
    this.setState({midterm: nextValue});
  }
  onGroupWorkerClick(nextValue, prevValue, name) {
    this.setState({groupWorker: nextValue});
  }onDifficultyClick(nextValue, prevValue, name) {
    this.setState({difficulty: nextValue});
  }

  componentDidMount() {
      axios.get("http://localhost:5050/matching",
      {
        body :
        (
          {
            'midterm': 4,
        'attendance' : 4,
        'groupWorker' : 4,
        'difficulty' : 4
      
      })
  
      }
      )
     
      .then(res => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }




  render(){

    const { attendance } = this.state;
    const { midterm } = this.state;
    const { groupWorker } = this.state;
    const { difficulty } = this.state;



    const ratingChanged = (newRating) => {
      console.log(newRating)
    }

    return(

      <div>
<header><a href="/" ><img src={logo} alt="Logo"/> </a> </header>
        <nav>
          <ul>
            <li><a href="/">หน้าแรก</a></li>
            <li><a href="/CreateArticle">สร้างบทความใหม่</a></li>

            <li><a href="/Matching" className="active">หาวิชาที่เหมาะกับฉัน</a></li>

            <li><a href="/FindArticle">ค้นหาบทความ</a></li>

            

          </ul>
        </nav>
        <section className="sec1" />
   <section className="Add">
      <div className="container">
        <div className="register_form">
        <center>
          <h3><font face="Fc active" size={8}>ค้นหาวิชาที่เหมาะกับฉัน</font></h3></center>
          <form className="form_area" id="myForm"  method="post"> 
           
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">งานกลุ่ม</label>
                  </div>
                  <div className="col-75">

                  <StarRatingComponent          
          name="groupWorker" 
          size={40}
          starCount={5}
          value={groupWorker}
          onStarClick={this.onGroupWorkerClick.bind(this)}
        /> 

                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">

                  <StarRatingComponent          
          name="midterm" 
          size={40}
          starCount={5}
          value={midterm}
          onStarClick={this.onMidtermClick.bind(this)}
        /> 

                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เช็คชื่อ / เข้าเรียน</label>
                  </div>
                  <div className="col-75">

                  <StarRatingComponent          
          name="attendance" 
          size={40}
          starCount={5}
          value={attendance}
          onStarClick={this.onAttendanceClick.bind(this)}
        /> 

                
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ความยากของเนื้อหา</label>
                  </div>
                  <div className="col-75">
                  <StarRatingComponent          
          name="difficulty" 
          size={40}
          starCount={5}
          value={difficulty}
          onStarClick={this.onDifficultyClick.bind(this)}
        /> 

                  </div>
                </div>

                
                </form>
              </div> 
             
              <div className="col-lg-12 ">
              <br></br>

              <br></br>

              <br></br>
                <button className="primary-btn" >ค้นหา</button>
                <br></br>
      <br></br>
      <MatchingList articles={this.state.article} />

                {/* { this.state.show && <Result />}  */}

              </div>
            </div>


            
      
      </section> 

      
     </div>
    );
  }

}

class Result extends Component {

  render(){
    return(

      

      <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			
				
				<div class="list-group-item">
					<h4 class="list-group-item-heading">
          วิชา SE

 					</h4>
           <div class="list-group-item">
           อ่านบทความเกี่ยวกับวิชานี้

           <p>
				<a class="btn" href="/AllArticleOfSubject">View details »</a>
			</p>
				</div>
        
				</div>
			</div>
	
	</div>
</div>
    )
  }
}

  export default Matching;