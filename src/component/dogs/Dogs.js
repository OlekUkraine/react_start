import React from 'react';
import {useForm} from "react-hook-form";

import {Dog} from "../dog/Dog";
import './Dogs.css';


const Dogs = ({stateAndDispatch}) => {
    const[{dogs}, dispatch] = stateAndDispatch;
    const {register, handleSubmit, reset} = useForm()

    const addDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog});
        reset();
    };

    return (
        <div className={'Dogs'}>
            <form onSubmit={handleSubmit(addDog)}>
                <input placeholder={'dog name'} {...register('name')}/>
                <button>save</button>
            </form>
            {
                dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)
            }
        </div>
    );
};

export {Dogs};