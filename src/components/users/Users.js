import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "../user/User";
import './Users.css';

const Users = ({setUserId, userId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers((value)))
    }, [])

    return (
        <div className={'all-users'}>
            {
                users.map(user => <User
                    user={user}
                    setUserId={setUserId}
                    userId={userId}
                    key={user.id}/>)
            }
        </div>
    );
};

export default Users;