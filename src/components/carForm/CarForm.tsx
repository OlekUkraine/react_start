import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm();

    const save = () => {

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input placeholder={''} {...register('')}/>
            <input placeholder={''} {...register('')}/>
            <input placeholder={''} {...register('')}/>

            <button>save</button>
        </form>
    );
};

export default CarForm;