import React, {Component} from 'react';
import './Post.css';


class Post extends Component {

    render() {
        const {id, userId, title, body} = this.props.post;
        return (
            <div className={'Post'}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        );
    }
}

export {
    Post
};