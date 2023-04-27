import React from 'react';

const Cat = ({cat, dispatch}) => {

    return (
        <div>
            {cat.name} {cat.id}
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: cat.id})}>delete</button>
        </div>
    );
};

export {Cat};