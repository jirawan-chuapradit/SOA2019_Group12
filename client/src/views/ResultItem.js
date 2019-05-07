import React, { Component } from 'react';

class ResultItem extends Component{
    state = {
        item: {}
    }

    componentDidMount(){
        this.setState({item:this.props.item})
    }

    render() {
        const item = this.state.item
        return (
            <div className="w3-third w3-margin-bottom  p-5">
                <div className="w3-card-4">
                    <img src={team1} alt="John" style={{ width: '100%' }} />
                    <div className="w3-container">
                        <h3 className="mt-2">ชื่อบทความ {item.title}</h3>
                        <p><button className="w3-button w3-light-grey w3-block">อ่านบทความต่อ..</button></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultItem;