import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux";
import './CarForm.css';

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    console.log(carForUpdate);

useEffect(()=>{
    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('year', carForUpdate.year)
        setValue('price', carForUpdate.price)
    }
}, [carForUpdate, setValue]);

    const save = async (car) => {
        await carsService.createCar(car);
        dispatch(carsActions.rebootPage());
        reset();
    };

    const updateCar = async (car) => {
        await carsService.updateCar(carForUpdate.id, car);
        dispatch(carsActions.rebootPage());
        dispatch(carsActions.setCarForUpdate(null));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate? updateCar: save)} className={'CarForm'}>
            <input placeholder={'brand'} {...register('brand')}/>
            <input placeholder={'year'} {...register('year')}/>
            <input placeholder={'price'} {...register('price')}/>
            <button>{carForUpdate? 'update':'save'}</button>
        </form>
    );
};

export {CarForm};