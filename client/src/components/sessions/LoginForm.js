import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/thunks/authThunks";

export default function LoginForm({ isLoginOrSignup }) {
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
                <h2 style={{ fontSize: "3em" }}>Welcome back!</h2>
                <div className='form--auth-label'>
                    <div className='form--auth-label-input'>
                        <label>
                            &nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                variant='filled'
                                label='E-mail'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='form--auth-label-input'>
                        <label>
                            Password:&nbsp;&nbsp;&nbsp;
                            <input
                                variant='filled'
                                label='Password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div
                    onClick={handleSubmit}
                    className='form--auth-login auth-link'>
                    Log in
                </div>
                <div>
                    <p style={{ fontSize: "1em" }}>
                        Not a member yet? Sign up{" "}
                        <font
                            onClick={() => isLoginOrSignup(false)}
                            className='auth-link'
                            style={{ textDecoration: "underline" }}>
                            here
                        </font>
                        .
                    </p>
                </div>
            </form>
        </>
    );
}
