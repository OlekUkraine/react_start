import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postIdService} from "../../services/post.id.service";
import './Post.css';

const Post = () => {
    const {postId} = useLocation().state;
    const [post, setPost] = useState(null);

    useEffect(()=>{
        postIdService.getById(postId).then(value => value.data).then(value => setPost({...value}))
    },[postId])

    console.log(post)

    return (
        <div className={'Post'}>
            <div>ID: {post?.id}</div>
            <div>title: {post?.title}</div>
            <div>body: {post?.body}</div>

        </div>
    );
};

export default Post;