import React, { useState } from "react";

import LoginForm from "./sessions/LoginForm";
import SignUpForm from "./sessions/SignUpForm";
import Modal from "./Modal";

import veggiesPic from "../public/images/welcome-to-garden.png";

export default function Landing() {
    const [isLoginOrSignup, setIsLoginOrSignup] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        if (e.target.id === "login") setIsLoginOrSignup(true);
        if (e.target.id === "signup") setIsLoginOrSignup(false);
        setShowModal(true);
    };

    return (
        <div className='landing'>
            <div className='landing--splash'>
                <img
                    src={veggiesPic}
                    alt='veggies'
                    style={{ width: "400px" }}
                />
                <div>
                    <h2>Virtual Community Garden</h2>
                    <p>
                        An app where people can share / trade their excess
                        produce and farm products with their neighbors.
                    </p>
                </div>
            </div>
            <div className='landing--auth-links'>
                <p id='login' onClick={handleClick} className='auth-link'>
                    Log In
                </p>

                <p id='signup' onClick={handleClick} className='auth-link'>
                    Sign Up
                </p>
            </div>
            {showModal ? (
                <Modal
                    componentToRender={
                        isLoginOrSignup ? (
                            <LoginForm isLoginOrSignup={setIsLoginOrSignup} />
                        ) : (
                            <SignUpForm isLoginOrSignup={setIsLoginOrSignup} />
                        )
                    }
                    handleClick={handleClick}
                    closeModal={setShowModal}
                />
            ) : null}
        </div>
    );
}
