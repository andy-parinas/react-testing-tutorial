import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChangeEvent = event => {
        this.setState({
            ...this.state,
            comment: event.target.value
        })
    }

    handleSubmitEvent = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            ...this.state,
            comment: ''
        })
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmitEvent} >
                    <h4> Add a comment </h4>
                    <textarea value={this.state.comment} onChange={this.handleChangeEvent} />
                    <div>
                        <button >Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments} >Fetch Comment</button>
            </div>   
        )
    }
}



export default connect(null,actions)(CommentBox);