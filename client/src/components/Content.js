import React, { Component } from 'react';
import Star from '../components/star'

class Content extends Component {
    render() {
        return (
            <div>
                <div class="container">

                    <div class="row">

                        {/* <!-- Post Content Column --> */}
                        <div class="col-lg-12">

                            {/* <!-- Title --> */}
                            <h1 class="mt-4">Post Title</h1>

                            {/* Tag catagory & subject */}
                            <span className="badge badge-primary m-1">เทคโนโลยีสารสนเทศ</span>
                            <span className="badge badge-success m-1">SOA</span>

                            {/* Post Content */}
                            <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
                            <br></br>
                            <hr />

                            {/* Review */}
                            <p className="lead mt-0">คะแนนรีวิวจากผู้เขียน</p>

                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">งานกลุ่ม</label>                                </div>
                                <div className="col-3"><Star /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">มีสอบกลางภาค</label>                                </div>
                                <div className="col-3"><Star /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">เช็คชื่อ / เข้าเรียน</label>                                </div>
                                <div className="col-3"><Star /> </div>
                            </div>
                            <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">ความยากของเนื้อหา</label>                                </div>
                                <div className="col-3"><Star /> </div>
                            </div>

                            {/* End Review */}
                            <p className="mt-0 text-right">ผู้เขียน zoommo</p>
                            <p className="mt-0 text-right">คะแนนบทความ ★★★★★</p>
                            <hr />
                        </div>
                    </div></div>
            </div>
        );
    }
}

export default Content;