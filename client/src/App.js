import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import Pages from './pages/Pages';
import { setUser } from './store/auth';

function App() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUser = async () => {
            //enter the back end route to get the current user
            const res = await fetch('/api/session');
            if (res.ok) {
                res.data = await res.json(); //current user info
                console.log(res.data);
                dispatch(setUser(res.data.user));
            }
            setLoading(false);
        }
        loadUser();
    }, [dispatch]);

    if (loading) return null;

    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/login' activeClassName='active'>Login</NavLink></li>
                        <li><NavLink to='/users' activeClassName='active'>Users</NavLink></li>
                    </ul>
                </nav>
                <Pages />

            </BrowserRouter>
        </>
    );
}

export default App;
