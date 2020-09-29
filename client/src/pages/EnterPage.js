import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import SignUpLoginLogo from '../components/SignUpLoginLogo';

export default function EnterPage() {

    // if (currentUserId) {
    //     return (
    //         <Redirect to='/' />
    //     )
    // }

    return (
        <>
            <SignUpLoginLogo />
            <Container fixed maxWidth='sm' style={{ marginTop: '-10%' }}>
                <h1 style={{ textAlign: 'center' }}>
                    <NavLink to='/enter/login'>Log in</NavLink> / <NavLink to='/enter/signup'>Sign up</NavLink></h1>
                <Route path='/enter/login' component={LoginForm} />
                <Route path='/enter/signup' component={SignUpForm} />
            </Container >
        </>
    );
}