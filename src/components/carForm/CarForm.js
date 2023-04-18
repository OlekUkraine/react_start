import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import './CarForm.css';
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setResetCarsList, carsFormUpdate, setCarFormUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "onChange",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carsFormUpdate) {
            setValue('brand', carsFormUpdate.brand, {shouldValidate: true});
            setValue('year', carsFormUpdate.year, {shouldValidate: true});
            setValue('price', carsFormUpdate.price, {shouldValidate: true});
        }
    }, [carsFormUpdate, setValue])


    const save = async (car) => {
        await carService.create(car);
        setResetCarsList(prev => !prev);
        reset();
    }

    const update = async (car) => {
        await carService.updateById(carsFormUpdate.id, car);
        console.log(carsFormUpdate);
        setResetCarsList(prev => !prev);
        setCarFormUpdate(() => null)
        reset();
    }



    return (
        <form onSubmit={handleSubmit(carsFormUpdate ? update : save)} className={'CarForm'}>
            <input placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span className={'error'}>{errors.brand.message}</span>}

            <input placeholder={'price'} {...register('price')}/>
            {errors.price && <span className={'error'}>{errors.price.message}</span>}

            <input placeholder={'year'} {...register('year')}/>
            {errors.year && <span className={'error'}>{errors.year.message}</span>}

            <button disabled={!isValid}>{carsFormUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};