import React, {Component} from 'react';
import './Comment.css';

class Comment extends Component {

    render() {
        const {id, postId, name, email, body} = this.props.comment

        return (
            <div className={'Comment'}>
                <div>Id: {id}</div>
                <div>PostId: {postId}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        );
    }
}

export {Comment};