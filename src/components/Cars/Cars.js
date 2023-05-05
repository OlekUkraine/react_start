import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import {carsActions} from "../../redux";
import {Car} from "../Car/Car";
import './Cars.css';

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, pageReload} = useSelector(state => state.cars);

    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => {
            dispatch(carsActions.setCars(value))
        })
    },[dispatch, pageReload])

    console.log(pageReload)

    return (
        <div className={'Cars'}>
            {
                cars.length && cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};