import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";
import './Users.css';

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(()=>{
        usersService.getAll().then(value => value.data).then(value => dispatch(userActions.setAll(value)))
    },[dispatch])

    return (
        <div className={'Users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};