import React from 'react';
import {carService} from "../../services/car.service";
import './Car.css';

const Car = ({car, setCarFormUpdate, setResetCarsList}) => {
    const {id, brand, year, price} = car;

    const deleted = async (id) => {
        await carService.deleteById(id);
        setResetCarsList(prev => !prev);
    }

    return (
        <div className={'Car'}>
            <div>id: <span>{id}</span></div>
            <div>brand: <span>{brand}</span></div>
            <div>year: <span>{year}</span></div>
            <div>price: <span>{price}</span></div>
            <div className={'Car-button'}>
                <button onClick={() => setCarFormUpdate(car)}>Update</button>
                <button onClick={() => deleted(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};