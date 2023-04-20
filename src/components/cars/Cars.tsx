import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import {Car} from "../car/Car";
import {ICar} from "../../interfaces/car.interface";
import {CarForm} from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [allCars, setAllCars] = useState<boolean>(false);


    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars])


    return (
        <div>
            <CarForm setAllcars={setAllCars}/>
            <hr/>
            <div>Car list</div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {
    Cars
}