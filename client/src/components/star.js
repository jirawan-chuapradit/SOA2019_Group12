import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class star extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1
    };
  }

 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    const ratingChanged = (newRating) => {
      console.log(newRating)
    }
    
    return (                
      <div> <center>
        {/* <h2>Rating from state: {rating}</h2> */}

        <StarRatingComponent          
          name="rate1" 
          size={40}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        /> 


        {/* <ReactStars
  count={5}
  onChange={ratingChanged}
  size={35}
  half={false}
  color2={'#ffd700'} 
  // value={rating}
  onStarClick={this.onStarClick.bind(this)}
    /> */}

        
        </center>
      </div>
    );
  }
}
 


export default star;