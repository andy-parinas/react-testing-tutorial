import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component{

    render(){

        let comments = [];

        if(this.props.comments){
            comments = this.props.comments.map(comment => {
                return <li key={comment} >{comment}</li>
            })
        }

        return(
            <div>
                <h4> Comment List </h4>
                <ul>
                    {comments}
                </ul>
            </div>
        )
    }

}


function mapStateToProps(state){
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);