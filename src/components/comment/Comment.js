import React from 'react';

import './Comment.css';

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;

    return (
        <div className={'Comment'}>
            <div>PostId: <span>{postId}</span></div>
            <div>Name: <span>{name}</span></div>
            <div>Email: <span>{email}</span></div>
            <div>Body: <span>{body}</span></div>
        </div>
    );
};

export default Comment;