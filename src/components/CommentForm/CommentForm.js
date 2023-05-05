import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {commentsService} from "../../services";
import {commentActions} from "../../redux";
import './CommentForm.css';

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const save = async (comment) => {
        const {data} = await commentsService.createComments(comment);
        dispatch(commentActions.createUser(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)} className={'CommentForm'}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export {CommentForm};