import React from 'react';

import {carsService} from "../../services";
import {useDispatch} from "react-redux";
import {carsActions} from "../../redux";
import './Car.css';

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carsService.deleteCar(id);
        dispatch(carsActions.rebootPage());
    };


    return (
        <div className={'Car'}>
            <div>Id: {id}, Brand: {brand}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <div className={'Car__buttons'}>
                <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>update</button>
                <button onClick={()=>deleteCar()}>delete</button>
            </div>
        </div>
    );
};

export {Car};