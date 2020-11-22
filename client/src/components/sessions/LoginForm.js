import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/auth";

export default function LoginForm() {
    const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("password");

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(email, password));
    };

    return (
        <>
            <form
                className='form--auth'
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}>
                <h2>Login</h2>
                <label>
                    Email
                    <input
                        variant='filled'
                        label='E-mail'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        variant='filled'
                        label='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button>Log in</button>
                <p>
                    Not a member yet? Sign up{" "}
                    <font className='form--auth-link'>here</font>.
                </p>
            </form>
        </>
    );
}
