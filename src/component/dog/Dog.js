import React from 'react';

const Dog = ({dog, dispatch}) => {

    return (
        <div>
            {dog.name} {dog.id}
            <button onClick={() => dispatch({type: 'DEL_DOG', payload: dog.id})}>delete</button>
        </div>
    );
};

export {Dog};