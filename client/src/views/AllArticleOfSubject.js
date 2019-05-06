
import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import { Button,Card } from 'react-bootstrap';
import Star from '../components/star'


class AllArticleOfSubject extends Component{



    render(){

      const {title , author} = this.props.article;

      return(

        // <div className="w3-third w3-margin-bottom  p-5">
        //         <div className="w3-card-4">
        //             {/* <img src={team1} alt="John" style={{ width: '100%' }} /> */}
        //             <div className="w3-container">
        //                 <h3 className="mt-3">ชื่อบทความ {title}</h3>
        //                 {/* <p className="w3-opacity"> ชื่อผู้เขียน {item.author}</p> */}
        //                 <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
        //             </div>
        //         </div>
        //     </div>

        
  <div>
    <div className="container">
            <div className="finding_form"></div>
            <form className="form_area" id="myForm">

              <div className="col-lg-12 form_group">
                <div className="row"></div>
  <Card>
  <Card.Header as="h5">{title}</Card.Header>
  <Card.Body>
    <Card.Text>
    ชื่อผู้เขียน {author}
    </Card.Text>
    <Button variant="warning" >อ่านบทความต่อ..</Button>
  </Card.Body>
</Card>
</div></form></div>

 </div>


      );
    }
  
  }

  export default AllArticleOfSubject;