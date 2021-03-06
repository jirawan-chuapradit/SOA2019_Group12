
import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import logo from '../assets/image/logo.png'
import { Button,Card } from 'react-bootstrap';
import Star from './star'


class MatchingItem extends Component{

  // state = {
  //   article: []
  // }

  // constructor(props) {
  //   super(props);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.article !== this.props.article) {
  //     this.setState({ article: this.props.article })
  //   }
  // }


    render(){

      const {title} = this.props.article;

      // const article = this.state.article;

      return(

        <div className="w3-third w3-margin-bottom  p-5">
                <div className="w3-card-4">
                    {/* <img src={team1} alt="John" style={{ width: '100%' }} /> */}
                    <div className="w3-container">
                        <h3 className="mt-3">ชื่อบทความ {title}</h3>
                        {/* <p className="w3-opacity"> ชื่อผู้เขียน {item.author}</p> */}
                        <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
                    </div>
                </div>
            </div>

      );
    }
  
  }

  export default MatchingItem;