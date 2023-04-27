import React, {Component} from 'react';
import {commentsService} from "../../services/comments.service";
import {Comment} from "../comment/Comment";
import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(value => value.data).then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div className={'Comments'}>
                {
                    this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export {
    Comments
};