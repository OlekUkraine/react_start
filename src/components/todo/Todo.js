import React from 'react';

import './Todo.css';

const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    console.log(todo)


    return (
        <div className={'Todo'}>
            <div>ID: {id} - completed: {completed}</div>
            <div>{title}</div>
        </div>
    );
};

export default Todo;