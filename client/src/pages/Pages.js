import React from 'react';
import { Route } from 'react-router-dom';

import UserList from '../components/UsersList';
import NavBar from '../components/NavBar';
import EnterPage from '../pages/EnterPage';
import LogoutUser from '../components/Logout';

export default function Pages() {
    return (
        <>
            <Route path='/users' component={UserList} />
            <Route path='/logout' component={LogoutUser} />
            <Route exact path='/'>
                <NavBar />
                <h1>My Home Page</h1>
            </Route>
            <Route path='/enter' component={EnterPage} />
        </>
    );
};

