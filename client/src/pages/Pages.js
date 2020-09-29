import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserList from '../components/UsersList';
import NavBar from '../components/NavBar';
import EnterPage from '../pages/EnterPage';
import LogoutUser from '../components/Logout';

export default function Pages() {

    const currentUserId = useSelector(state => state.auth.id);

    return (
        <>
            <Route path='/users' component={UserList} />
            <Route path='/logout' component={LogoutUser} />
            <Route exact path='/' render={() => !currentUserId ? <Redirect to='/enter' /> :
                <>
                    <NavBar />
                    <h1>My Home Page</h1>
                </>
            }
            />
            <Route path='/enter' component={EnterPage} />
        </>
    );
};

