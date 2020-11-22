import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import { registerUser } from "../../store/thunks/authThunks";

export default function SignUpForm({ isLoginOrSignup }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("demo@example.com");
    const [password, setPassword] = useState("password");

    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

    const userGeocode = [13, 123];

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(
            registerUser(
                email,
                password,
                firstName,
                lastName,
                address,
                userGeocode
            )
        );
    };

    return (
        <form
            className='form--auth'
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                    First name
                    <input
                        style={{ display: "flex", flexShrink: "0" }}
                        variant='filled'
                        label='First Name'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last name
                    <input
                        style={{ display: "flex", flexGrow: "2" }}
                        variant='filled'
                        label='Last Name'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                    Email
                    <input
                        style={{ display: "flex", flexGrow: "2" }}
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
                        style={{ display: "flex", flexShrink: "0" }}
                        variant='filled'
                        label='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <h1 style={{ textAlign: "center" }}>Address</h1>
            <label>
                Address
                <input
                    id='autocomplete'
                    variant='filled'
                    label='Full Address'
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <label>
                Address
                <input
                    variant='filled'
                    label='Street Address'
                    type='text'
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                />
            </label>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <label>
                    City
                    <input
                        style={{ display: "flex", flexGrow: "3" }}
                        variant='filled'
                        label='City'
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label>
                    State
                    <input
                        style={{ display: "flex", flexShrink: "5" }}
                        variant='filled'
                        label='State'
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </label>
                <label>
                    Zip code
                    <input
                        style={{ display: "flex", flexShrink: "0" }}
                        variant='filled'
                        label='Zip Code'
                        type='text'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
            </div>
            <button>Sign Up</button>
            <p>
                Already a member?
                <font
                    onClick={() => isLoginOrSignup(true)}
                    className='form--auth-link'>
                    Log in
                </font>
                .
            </p>
        </form>
    );
}
