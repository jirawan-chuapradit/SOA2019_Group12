import React , { Component} from 'react';

class Suggestion extends Component{

  

    render(){
      const lockHeight = {
        height: '150px'
      };

        return(
        <div className="w3-row w3-container">
        <div className="w3-center w3-padding-64">
          <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">เกี่ยวกับเรา</span>
        </div>
        <div style={lockHeight} className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16 lockHeight">
          <h3>Ploblem</h3>
          <p>วิชาเลือกที่มีอยู่มากมาย แต่ไม่รู้จะเรียนวิชาอะไร รีวิวก็แสนจะกระจัดกระจาย</p>
        </div>

        <div style={lockHeight} className="w3-col l3 m6 w3-grey w3-container w3-padding-16 lockHeight">
          <h3>Solution</h3>
          <p>ตัวเลือกใหม่ในการหารีวิววิชาเลือกที่ง่ายแสนง่าย และช่วยตัดสินใจว่าเราจะเรียนอะไร</p>
        </div>

        <div style={lockHeight} className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16 lockHeight">
          <h3>Reviews</h3>
          <p>เรียนมาแล้ว อยากจะแบ่งปันความรู้สึก ก็สามารถสร้างบทความได้ง่ายๆ </p>
        </div>

        <div style={lockHeight} className="w3-col l3 m6 w3-black w3-container w3-padding-16 lockHeight">
          <h3>Matching</h3>
          <p>ค้นหาวิชาที่เลือกที่เหมาะกับเรา เพียงแค่ปลายนิ้วสัมผัส จากลำดับความชอบ 4 อย่าง</p>
        </div>
      </div>
        );
    }
}

export default Suggestion;