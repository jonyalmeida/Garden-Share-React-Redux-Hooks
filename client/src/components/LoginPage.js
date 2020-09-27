import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                E-mail
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type='submit'>Log in</button>
        </form>
    );
}


export default LoginPage;