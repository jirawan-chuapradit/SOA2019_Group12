import React , { Component} from 'react';
import team1 from '../assets/image/team1.jpg';
import team2 from '../assets/image/team2.jpg';
import team3 from '../assets/image/team3.jpg';

class Thumbnail extends Component{
    render(){
      return (
  
        <div className="w3-row-padding" id="about">
          <div className="w3-center w3-padding-64">
            <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">บทความล่าสุด</span>
          </div>



          <div>
        <div className="w3-third w3-margin-bottom  p-5">
          <div className="w3-card-4">
            <img src={team1} alt="John" style={{width: '100%'}} />
            <div className="w3-container">
              <h3 className="mt-2">ชื่อบทความ [Title]</h3>
              <p className="w3-opacity"> ชื่อผู้เขียน [Author]</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
            </div>
          </div>
        </div>

        <div className="w3-third w3-margin-bottom p-5">
          <div className="w3-card-4">
          <img src={team2} alt="John" style={{width: '100%'}} />
            <div className="w3-container">
            <h3 className="mt-2">ชื่อบทความ [Title]</h3>
              <p className="w3-opacity"> ชื่อผู้เขียน [Author]</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
            </div>
          </div>
        </div>

        <div className="w3-third w3-margin-bottom  p-5">
          <div className="w3-card-4">
          <img src={team3} alt="John" style={{width: '100%'}} />
            <div className="w3-container">
            <h3 className="mt-2">ชื่อบทความ [Title]</h3>
              <p className="w3-opacity"> ชื่อผู้เขียน [Author]</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
            </div>
          </div>
        </div>
      </div>


        </div>
        
      );
    }
}
  

export default Thumbnail;
