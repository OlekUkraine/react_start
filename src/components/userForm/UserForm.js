import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setUpdateUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm();

    const save = async (user) => {
        const {data} = await userService.create(user);
        console.log(data);
        reset();
        setUpdateUsers(prev => !prev);
    }

    return (
        <form onSubmit={handleSubmit(save)}>

            <input type={'text'} placeholder={'name'} {...register('name', {
                maxLength: {value: 20, message: 'Занадто довге ім\'я, я не запам\'ятаю!'},
                required: {value: true, message: 'Потрібно хоча б щось написати!'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username', {
                maxLength: {value: 20, message: 'Занадто довге ім\'я, я не запам\'ятаю!'},
                required: {value: true, message: 'Потрібно хоча б щось написати!'}
            })}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type={'text'} placeholder={'email'} {...register('email', {
                maxLength: {value: 20, message: 'Занадто довге ім\'я, я не запам\'ятаю!'},
                required: {value: true, message: 'Потрібно хоча б щось написати!'}
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <input type={'text'} placeholder={'address'} {...register('address', {
                maxLength: {value: 20, message: 'Занадто довге ім\'я, я не запам\'ятаю!'},
                required: {value: true, message: 'Потрібно хоча б щось написати!'}
            })}/>
            {errors.address && <span>{errors.address.message}</span>}

            <button disabled={!isValid}>save</button>

        </form>
    );
};

export default UserForm;