import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Comment from "../comment/Comment";
import {commentsService} from "../../services/comments.service";
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments([...value]))
    }, [comments])

    return (
        <div className={'Comments__view'}>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Comments;