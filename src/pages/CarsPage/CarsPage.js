import React from 'react';

import {CarForm, Cars} from "../../components";
import './CarsPage.css';

const CarsPage = () => {
    return (
        <div className={'CarsPage'}>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};