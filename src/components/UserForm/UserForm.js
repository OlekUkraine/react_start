import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {usersService} from "../../services";
import {userActions} from "../../redux";
import './UserForm.css';

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const save = async (user) => {
        const {data} = await usersService.createUser(user);
        dispatch(userActions.createUser(data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}  className={'UserForm'}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};