import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className={'Header'}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'animals'}>Animals</NavLink>
        </div>
    );
};

export default Header;