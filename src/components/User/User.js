import React from 'react';

import './User.css';

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div className={'User'}>
            <div>Id:{id} {name}</div>
            <div>{username}</div>
        </div>
    );
};

export {User};