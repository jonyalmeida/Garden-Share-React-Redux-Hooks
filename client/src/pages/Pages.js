import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import NavBar from '../components/NavBar';
import EnterPage from '../pages/EnterPage';
import LogoutUser from '../components/sessions/Logout';
import HomePage from './HomePage';
import Dashboard from '../components/dashboard-ui/Dashboard';

export default function Pages() {

    const currentUserId = useSelector(state => state.auth.id);

    return (
        <>
            <Route path='/logout' component={LogoutUser} />
            <Route path='/' render={() => !currentUserId ? <Redirect to='/enter' /> :
                <>
                    <HomePage />
                </>
            }
            />
            <Route path='/enter' component={EnterPage} />
        </>
    );
};

