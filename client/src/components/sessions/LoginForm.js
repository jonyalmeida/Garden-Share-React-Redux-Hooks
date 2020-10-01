import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthSubmitButton from './AuthSubmitButton';
import { TextField } from '@material-ui/core';

import { login } from '../../store/auth';

export default function LoginForm() {

    const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('password');

    const dispatch = useDispatch();

    const history = useHistory();
    console.log(history);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        history.replace('/');
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