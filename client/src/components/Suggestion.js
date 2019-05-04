import React , { Component} from 'react';

class Suggestion extends Component{
    render(){
        return(
        <div className="w3-row w3-container">
        <div className="w3-center w3-padding-64">
          <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">เกี่ยวกับเรา</span>
        </div>
        <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
          <h3>Design</h3>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
        <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
          <h3>Branding</h3>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
        <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
          <h3>Consultation</h3>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
        <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
          <h3>Promises</h3>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        </div>
      </div>
        );
    }
}

export default Suggestion;