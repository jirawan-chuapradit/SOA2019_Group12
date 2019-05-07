import React, { Component } from 'react';
import Star from '../components/star'

class Content extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        const article_b = this.props.article;
  
        return (
            <div>
                <div class="container">
                   
                    <div class="row">

                        {/* <!-- Post Content Column --> */}
                        <div class="col-lg-12">

                            {/* <!-- Title --> */}
                            <h1 class="mt-4">{article_b.title}</h1>

                            {/* Tag catagory & subject */}
                            <span className="badge badge-primary m-1">เทคโนโลยีสารสนเทศ</span>
                            <span className="badge badge-success m-1">SOA</span>

                            {/* Post Content */}



                            <p className="lead mt-3" > เป็นวิชาที่ยากสุดๆ ไปเลย {article_b.description} 
                              !</p>
                            <br></br>
                            <hr />

                            {/* Review */}
                            <p className="lead mt-0">คะแนนรีวิวจากผู้เขียน</p>

                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">งานกลุ่ม</label>                                </div>
                                <div className="col-3"><Star rating={article_b.groupWorker} /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">มีสอบกลางภาค</label>                                </div>
                                <div className="col-3"><Star rating={article_b.midterm}  /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">เช็คชื่อ / เข้าเรียน</label>                                </div>
                                <div className="col-3"><Star rating={article_b.attendance}  /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">ความยากของเนื้อหา</label>                                </div>
                                <div className="col-3"><Star  rating={article_b.difficulty} /> </div>
                            </div>

                            {/* End Review */}
                            <p className="mt-0 text-right">ผู้เขียน zoommo</p>
                            <hr />
                        </div>
                    </div></div>
            </div>
        );
        
    }
}

export default Content;