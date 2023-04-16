import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";

const CommentForm = ({setUpdateComments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm()

    const save = async (comment) => {
        const {data} = await commentService.create(comment);
        console.log(data);
        setUpdateComments(prev => !prev);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input placeholder={'name'} {...register('name', {
                maxLength: {value: 20, message: 'Не більше 20 літер'},
                required: {value: true, message: 'Без ім\'я нічого не збережеться!'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input placeholder={'email'} {...register('email', {
                maxLength: {value: 20, message: '20 літер - це максимум!'},
                required: {value: true, message: 'Твій email потрібен для спаму, без цього ніяк!'}
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input placeholder={'body'} {...register('body', {
                minLength: {value: 20, message: 'Хоча б 20 літер напиши...'},
                maxLength: {value: 500, message: 'Нетреба так багато, ти не один!'}
            })}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default CommentForm;