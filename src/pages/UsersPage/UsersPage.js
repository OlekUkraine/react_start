import React from 'react';

import {Users, UserForm} from "../../components";
import './UsersPage.css';

const UsersPage = () => {
    return (
        <div className={'UsersPage'}>
            <UserForm/>
            <Users/>
        </div>
    );
};

export {UsersPage};