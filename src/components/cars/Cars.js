import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";
import './Cars.css';


const Cars = () => {
    const [cars, setCars] = useState([]);
    const [resetCarsList, setResetCarsList] = useState(null);
    const [carsFormUpdate, setCarFormUpdate] = useState(null);


    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [resetCarsList])


    return (
        <>

            <div className={'Cars'}>
                <CarForm setResetCarsList={setResetCarsList} carsFormUpdate={carsFormUpdate}
                         setCarFormUpdate={setCarFormUpdate}/>
            </div>

            <div className={'Cars'}>{
                cars.map(car => <Car key={car.id} car={car} setCarFormUpdate={setCarFormUpdate}
                                     setResetCarsList={setResetCarsList}/>)
            }</div>
        </>
    );
};

export {Cars};