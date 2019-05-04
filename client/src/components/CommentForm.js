import React, { Component } from 'react';
import Star from '../components/star'

class CommentForm extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        {/* <!-- Post Content Column --> */}
                        <div class="col-lg-12">
                            <div className="card my-1">
                                <h5 className="card-header">แสดงความคิดเห็น:</h5>
                                <div className="card-body">
                                <div className="row">
                                <div className="col-5"><label htmlFor="name pl-10">ให้คะแนนเจ้าของกระทู้</label>                                </div>
                                <div className="col-3"><Star /> </div>
                            </div>
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" rows={3} defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">โพส</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    </div>
        );
    }
}

export default CommentForm;