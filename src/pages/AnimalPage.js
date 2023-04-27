import React, {useReducer} from 'react';

import {initState, reducer} from "../reducers/animal.reducer";
import {Cats} from "../component/cats/Cats";
import {Dogs} from "../component/dogs/Dogs";
import './Page.css';

const AnimalPage = () => {

    const stateAndDispatch = useReducer(reducer, initState);

    return (
        <div className={'Page'}>
            <Cats stateAndDispatch={stateAndDispatch}/>
            <Dogs stateAndDispatch={stateAndDispatch}/>
        </div>
    );
};

export default AnimalPage;