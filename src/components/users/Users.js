import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../user/User";
import UserForm from "../userForm/UserForm";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [updateUsers, setUpdateUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    }, [updateUsers])

    return (
        <div className={'Users'}>

            <UserForm setUpdateUsers={setUpdateUsers}/>

            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;