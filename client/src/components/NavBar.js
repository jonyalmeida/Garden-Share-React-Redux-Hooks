import React from 'react';
import { NavLink } from 'react-router-dom';

export default function () {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                <li><NavLink to='/login' activeClassName='active'>Login</NavLink></li>
                <li><NavLink to='/users' activeClassName='active'>Users</NavLink></li>
            </ul>
        </nav>
    );
}