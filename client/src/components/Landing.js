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
                        Whether you have a garden, a farm or maybe a fertile
                        tree, Garden Share makes it easy to put your extra
                        produce up for trade, sale or donation to your
                        community.
                    </p>
                    <br />
                    <p>
                        Meet your neighbors, trade delicious organic food with
                        folks that care as much as you do about the food your
                        family eats.
                    </p>
                    <br />
                    <p>
                        Garden Share has a mission to cut down wasted food,
                        while improving quality, taste and nutrition. Reduce the
                        carbon footprint of shipping and storing food from other
                        countries. Support local economies.
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
