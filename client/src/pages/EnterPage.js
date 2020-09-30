import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import LoginForm from '../components/sessions/LoginForm';
import SignUpForm from '../components/sessions/SignUpForm';
import SignUpLoginLogo from '../components/sessions/SignUpLoginLogo';

export default function EnterPage() {

    const currentUserId = useSelector(state => state.auth.id);

    if (currentUserId) {
        return (
            <Redirect to='/' />
        )
    }

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