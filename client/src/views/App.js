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
      axios.get("http://localhost:8000/").then(res => {
      console.log(res.data);
      { this.setState({ article: res.data }) }
    });
  }

  render() {


    return (
      <div>
        <Header />
        <Suggestion />
        {/* <ThumbnailItem 
          articleHome={data}       
         /> */}

        <Thumbnail article={this.state.article} />
      </div>
    );
  }
}



export default App;
