import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Pages from './pages/Pages';

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            //enter the back end route to get the current user
            const res = await fetch('/api/session');
            if (res.ok) {
                res.data = await res.json(); //current user info
                console.log(res.data)
            }
            setLoading(false);
        }
        loadUser();
    }, []);

    if (loading) return null;

    return (
        <>
            <CssBaseline />
            <BrowserRouter>
                <Provider store={store}>
                    <nav>
                        <ul>
                            <li><NavLink to='/' activeClassName='active'>Home</NavLink></li>
                            <li><NavLink to='/login' activeClassName='active'>Login</NavLink></li>
                            <li><NavLink to='/users' activeClassName='active'>Users</NavLink></li>
                        </ul>
                    </nav>
                    <Pages />
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
