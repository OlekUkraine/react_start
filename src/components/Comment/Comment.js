import React from 'react';

import './Comment.css';

const Comment = ({comment}) => {
    const {id, name, email} = comment;

    return (
        <div className={'Comment'}>
            <div>Id:{id} {name}</div>
            <div>{email}</div>
        </div>
    );
};

export {Comment};