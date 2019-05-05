import React, { Component } from 'react';
import team1 from '../assets/image/team1.jpg';
import team2 from '../assets/image/team2.jpg';
import team3 from '../assets/image/team3.jpg';
// import PropTypes from 'prop-types';


class ThumbnailItem extends Component {
    state = {
        item: {}
    }

    componentDidMount(){
        this.setState({item:this.props.item})
    }

    showImage(){
        let image = {team1,team2,team3}
        // listImage = 
    }

    render() {
        const item = this.state.item
        let count =1
        return (
            <div className="w3-third w3-margin-bottom  p-5">
                <div className="w3-card-4">
                    <img src={team1} alt="John" style={{ width: '100%' }} />
                    <div className="w3-container">
                        <h3 className="mt-2">ชื่อบทความ {item.title}</h3>
                        <p className="w3-opacity"> ชื่อผู้เขียน {item.author}</p>
                        <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
                    </div>
                </div>
            </div>
        )
    }
}



export default ThumbnailItem;