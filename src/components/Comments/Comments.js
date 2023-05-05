import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";
import './Comments.css';


const Comments = () => {
    const dispatch = useDispatch();
    const {comments} = useSelector(state => state.comments);

    useEffect(()=>{
        commentsService.getAll().then(value => value.data).then(value => dispatch(commentActions.setAll(value)));
    }, [dispatch])


    return (
        <div className={'Comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};