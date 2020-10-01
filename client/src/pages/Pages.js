import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserList from '../components/UsersList';
// import NavBar from '../components/NavBar';
import EnterPage from '../pages/EnterPage';
import LogoutUser from '../components/sessions/Logout';
import HomePage from './HomePage';
import Dashboard from '../components/dashboard-ui/Dashboard';

export default function Pages() {

    const currentUserId = useSelector(state => state.auth.id);

    return (
        <>
            <Route path='/users' component={UserList} />
            <Route path='/logout' component={LogoutUser} />
            <Route exact path='/' render={() => !currentUserId ? <Redirect to='/enter' /> :
                <>
                    <HomePage />
                </>
            }
            />
            <Route path='/enter' component={EnterPage} />
            <Route path='/dashboard' component={Dashboard} />
        </>
    );
};

