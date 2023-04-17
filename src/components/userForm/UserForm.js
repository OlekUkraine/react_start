import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import {joiResolver} from "@hookform/resolvers/joi"
import {userValidator} from "../../validators/user.validator";


const UserForm = ({setUpdateUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({resolver: joiResolver(userValidator)});

    const save = async (user) => {
        const {data} = await userService.create(user);
        console.log(data);
        reset();
        setUpdateUsers(prev => !prev);
    }

    return (
        <form onSubmit={handleSubmit(save)}>

            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type={'text'} placeholder={'address'} {...register('address')}/>
            {errors.address && <span>{errors.address.message}</span>}

            <button disabled={!isValid}>save</button>

        </form>
    );
};

export default UserForm;