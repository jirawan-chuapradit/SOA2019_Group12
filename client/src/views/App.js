import React, { Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
import Thumbnail from '../components/Thumbnail';
import Suggestion from '../components/Suggestion';
import Header from '../components/Header';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {}   
     }
  }


  componentDidMount() {
      axios.get("http://35.247.168.170:3000/api/article/").then(res => {
      console.log(res.data);
      { this.setState({ article: res.data }) }
    });
  }

  render() {


    return (
      <div>
        <Header />
        <Suggestion />
        

        <Thumbnail article={this.state.article} />
      </div>
    );
  }
}



export default App;
