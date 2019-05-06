import React ,{ Component } from 'react';
import '../assets/css/create.css';
import '../assets/css/header.css';
// import AllArticleOfSubject from '../views/AllArticleOfSubject';
import ArticleList from '../components/ArticleList'
import axios from 'axios';
import Header from '../components/Header'


class FindArticleZoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subject: "",
    }
    this.confirmSearch = this.confirmSearch.bind(this);

  }

  handleChange = (event) => {
    this.setState({ subject: event.target.value })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md12">
              <select id="ddlViewBy" value={this.state.subject} onChange={this.handleChange.bind(this)}>
                <option value="Eng">Eng</option>
                <option value="Thai" selected="selected">Thai</option>
                <option value="Japan">Japan</option>
              </select>


              <button onClick={() => this.confirmSearch()} >ตกลง</button>
              <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>ตกลง </button>

            </div>


          </div>
        </div>
      </div>
    )
  }

}

export default FindArticleZoom;