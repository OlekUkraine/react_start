import React from 'react';

import './User.css';

const User = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div className={'User'}>
            <div>ID: <span>{id}</span></div>
            <div>Name: <span>{name}</span></div>
            <div>Username: <span>{username}</span></div>
            <div>Email: <span>{email}</span></div>
        </div>
    );
};

export default User;