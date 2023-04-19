import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/comment.service";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [updateComments, setUpdateComments] = useState(null);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value))
    }, [updateComments])

    return (
        <div className={'Comments'}>
            <CommentForm setUpdateComments={setUpdateComments}/>

            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;