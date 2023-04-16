import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [updateUsers, setUpdateUsers] = useState(null);


    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[updateUsers])

    // console.log(updateUsers);

    return (
        <div>

            <UserForm setUpdateUsers={setUpdateUsers}/>

            <hr/>

            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;