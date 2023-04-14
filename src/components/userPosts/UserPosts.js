import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserPost from "../userPost/UserPost";
import './UserPosts.css';

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setPosts(value))
    }, [userId])

    return (
        <div className={'all-posts'}>
            {
                posts.map(post => <UserPost key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPosts;