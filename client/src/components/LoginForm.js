import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AuthSubmitButton from '../components/AuthSubmitButton';
import { TextField } from '@material-ui/core';

import { login } from '../store/auth';

export default function LoginForm() {

    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');
    const currentUserId = useSelector(state => state.auth.id);
    console.log(currentUserId);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <TextField
                variant='filled'
                label='E-mail'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <TextField
                variant='filled'
                label='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <AuthSubmitButton>Log in</AuthSubmitButton>
        </form>
    );
}