import React, { Component } from 'react';
// import team1 from '../assets/image/team1.jpg';
// import team2 from '../assets/image/team2.jpg';
// import team3 from '../assets/image/team3.jpg';
import ThumbnailItem from './ThumbnailItem'

class Thumbnail extends Component {

  state = {
    article: []
  }

  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article !== this.props.article) {
      this.setState({ article: this.props.article })
    }
  }


  render() {
    const article = this.state.article;
    let counter = 0
    const list = article.map(item => {

      if (counter <= 2) {
        counter += 1
        return <ThumbnailItem key={item._id} item={item} />
      } else {
        return;
      }
    }
    )
    return (

      <div className="w3-row-padding" id="about">
        <div className="w3-center w3-padding-64">
          <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">บทความแนะนำ</span>
        </div>
        <div>
          {list}
        </div>
      </div>

    );
  }
}


export default Thumbnail;
