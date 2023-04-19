import React from 'react';
import {joiResolver} from "@hookform/resolvers/joi"
import {useForm} from "react-hook-form";

import {userValidator} from "../../validators/user.validator";
import {userService} from "../../services/user.service";
import './UserForm.css';

const UserForm = ({setUpdateUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all", resolver: joiResolver(userValidator)});

    const save = async (user) => {
        const {data} = await userService.create(user);
        console.log(data);
        reset();
        setUpdateUsers(prev => !prev);
    }

    return (
        <form onSubmit={handleSubmit(save)} className={'UserForm'}>

            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>save</button>

        </form>
    );
};

export default UserForm;