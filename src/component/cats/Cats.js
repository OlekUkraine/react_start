import React from 'react';
import {useForm} from "react-hook-form";

import {Cat} from "../cat/Cat";
import './Cats.css';

const Cats = ({stateAndDispatch}) => {
    const [{cats}, dispatch] = stateAndDispatch;
    const {register, handleSubmit, reset} = useForm();

    const addCat = (cat) => {
        dispatch({type: 'ADD_CAT', payload: cat});
        reset();
    };
    
    return (
        <div className={'Cats'}>
            <form onSubmit={handleSubmit(addCat)}>
                <input placeholder={'cat name'} {...register('name')}/>
                <button>save</button>
            </form>
            {
                cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)
            }
        </div>
    );
};

export {Cats};