import React from 'react';
import './User.css';

const User = ({user, setUserId, userId}) => {
    const {id, name, username, email} = user;

    return (
        <div className={'user-block'}>
            <div>id:<strong>{id}</strong>__ name:<strong>{name}</strong></div>
            <div>username:{username}</div>
            <div>email:{email}</div>

            <button onClick={() => {
                userId === id ? setUserId(false) : setUserId(id)
            }
            }>open post
            </button>

        </div>
    );
};

export default User;