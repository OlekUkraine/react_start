import React from 'react';
import './UserPost.css';

const UserPost = ({post}) => {
    const {id, title, userId, body} = post;

    return (
        <div className={'user-post'}>
            <div>id:{id}__ userId:{userId}</div>
            <div><strong>title</strong>:{title}</div>
            <div><strong>body</strong>:{body}</div>
        </div>
    );
};

export default UserPost;