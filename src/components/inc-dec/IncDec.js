import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {decFn, incFn, resFn} from "../../redux/actions";


const IncDec = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incFn());
    };

    const decrement = () => {
        dispatch(decFn());
    };

    const resetToDefault = () => {
        dispatch(resFn());
    };

    return (
        <div className={'IncDec'}>
            <h2>Inc-dec</h2>
            <h1>{store}</h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={resetToDefault}>Reset</button>
            </div>
        </div>
    );
};

export default IncDec;