import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import './Posts.css'
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [openPosts, setOpenPosts] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.data)
            .then(allPosts => {
                setPosts(allPosts)
            })
    }, [])

    return (
        <>
            <div className={'all-list-posts'}>{
                posts.map(post => <Post
                    post={post}
                    setOpenPosts={setOpenPosts}
                    key={post.id}/>)
            }
            </div>

            {
                openPosts &&
                <div className={'body-post'}>
                    {
                        openPosts.body
                    }
                </div>
            }

        </>
    );
};

export default Posts;