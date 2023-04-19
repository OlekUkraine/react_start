import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/comment.validator";
import './CommentForm.css';


const CommentForm = ({setUpdateComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:'all', resolver:joiResolver(commentValidator)})

    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        console.log(data);
        setUpdateComments(prev => !prev);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)} className={'CommentForm'}>
            <input placeholder={'name'} {...register('name' )}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input placeholder={'email'} {...register('email' )}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default CommentForm;