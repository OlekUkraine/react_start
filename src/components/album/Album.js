import React from 'react';

import './Album.css';

const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div className={'Album'}>
            <div>ID: {id}</div>
            <div>{title}</div>
        </div>
    );
};

export default Album;