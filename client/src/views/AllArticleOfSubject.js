
import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import { Button,Card } from 'react-bootstrap';
import Star from '../components/star'
import {Redirect} from 'react-router'


class AllArticleOfSubject extends Component{


    redirectToArticle = () => {
      this.setState({isRedirect:true})
      
    }

    state = {
      isRedirect : false
    }


    render(){

      

  const {title , author} = this.props.article;



      const article = this.props.article;
      console.log(this.props.article)
      if(this.state.isRedirect){
        window.location.href = `/article?id=${article._id}`;
      }

      // const article = this.state.article;

      return(



        
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
    <Button variant="warning" onClick={this.redirectToArticle} >อ่านบทความต่อ..</Button>
  </Card.Body>
</Card>
</div></form></div>

 </div>


      );
    }
  
  }

  export default AllArticleOfSubject;