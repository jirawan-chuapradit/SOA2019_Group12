import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        {/* <!-- Post Content Column --> */}
                        <div class="col-lg-12">

                            <div className="media mb-4">
                                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">อิ๋วอิ๋วชอบกินเผ็ด</h5>
                                    ไม่เคยชอบเรียนวิชาไหน เท่าวิชานี้มาก่อน
                                </div>
                            </div>

                            {/* comment2 */}
                            <div className="media mb-4">
                                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""   />
                                <div className="media-body">
                                    <h5 className="mt-0">จุ๊กจิ๊ก</h5>
                                    บอกได้ว่า I LOVE MICROSERVICE ทั้งใจ //ปาหัวใจจจ
                                </div>
                            </div>

                        </div>
                    </div></div>
            </div>
        );
    }
}

export default Comment;