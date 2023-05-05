import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className={'Header'}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};