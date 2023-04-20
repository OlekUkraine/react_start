import React, {useEffect, useState} from 'react';

import {todosService} from "../../services/todos.service";
import Todo from "../todo/Todo";
import './Todos.css';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        todosService.getAll().then(value => value.data).then(value => setTodos([...value]))
    },[todos])

    return (
        <div className={'Todos'}>
            {
                todos.map(todo => <Todo todo={todo}/>)
            }
        </div>
    );
};

export default Todos;