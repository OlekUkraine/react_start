import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import {Car} from "../car/Car";
import {ICar} from "../../interfaces/car.interface";
import {CarForm} from "../carForm/CarForm";
import './Cars.css'


const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<boolean>(false);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);


    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars])


    return (
        <div className={'Cars'}>
            <CarForm setAllCars={setAllCars} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>

            <h2>Cars list</h2>
            <div className={'Cars-list'}>
                {
                    cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                         setAllCars={setAllCars}/>)
                }
            </div>
        </div>
    );
};

export {
    Cars
}