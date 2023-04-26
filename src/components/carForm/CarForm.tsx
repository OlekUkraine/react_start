import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/carValidator";
import {IUseState} from "../../types/useState.type";
import './CarForm.css';


interface IProps {
    setAllCars: IUseState<boolean>,
    setCarForUpdate: IUseState<ICar|null>,
    carForUpdate: ICar|null
}

const CarForm:FC<IProps> = ({setAllCars, setCarForUpdate, carForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm<ICar>( {mode:'all', resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value])=> {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue]);

    const save:SubmitHandler<ICar> = async (car) => {
           await carService.create(car);
           setAllCars(prev => !prev);
           reset();
    }

    const updateCar:SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate!.id, car);
        setAllCars(prev => !prev);
        setCarForUpdate(()=>null);
        reset();
    }

    console.log(isValid)


    return (
        <div className={'Cars-form'}>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : save)}>
                <input placeholder={'brand'} {...register('brand')}/>
                <input placeholder={'year'} {...register('year')}/>
                <input placeholder={'price'} {...register('price')}/>

                <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            </form>

            <div className = {errors.brand || errors.year || errors.price? 'Cars-form__errors': 'Cars-form__not-errors'}>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
            </div>

        </div>
    );
};

export {
    CarForm
}
