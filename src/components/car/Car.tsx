import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";
import './Car.css'


interface IProps{
    setCarForUpdate: IUseState<ICar|null>,
    setAllCars: IUseState<boolean>,
    car:ICar
}

const Car: FC<IProps> = ({car, setCarForUpdate,setAllCars}) => {
    const {id, brand, price, year} = car;

    const carDeleted = async () => {
        await carService.delete(id);
        setAllCars(prev=>!prev);
    }

    return (
        <div className={'Car'}>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div>
                <button onClick={()=>setCarForUpdate(car)}>Update</button>
                <button onClick={()=>carDeleted()}>Delete</button>
            </div>
        </div>
    );
};

export {
    Car
}