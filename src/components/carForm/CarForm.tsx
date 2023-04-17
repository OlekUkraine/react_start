import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";


const CarForm: FC<any> = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm<ICar>();

    useEffect(()=>{

    })



    const save:SubmitHandler<ICar> = async (car) => {
           await carService.create(car);
           setAllCars((prev:boolean) => !prev);
           reset();
    }

    const updateCar = () => {
        // carService.updateById()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate? updateCar: save)}>
            <input placeholder={'brand'} {...register('brand')}/>
            <input placeholder={'year'} {...register('year')}/>
            <input placeholder={'price'} {...register('price')}/>

            <button>save</button>
        </form>
    );
};

export {
    CarForm
}