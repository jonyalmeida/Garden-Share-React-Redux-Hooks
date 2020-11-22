import React, { useState } from "react";

import LoginForm from "./sessions/LoginForm";
import SignUpForm from "./sessions/SignUpForm";
import Modal from "./Modal";

export default function Landing() {
    const [isLoginOrSignup, setIsLoginOrSignup] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (e) => {
        if (e.target.id === "login") setIsLoginOrSignup(true);
        if (e.target.id === "signup") setIsLoginOrSignup(false);
        setShowModal(!showModal);
    };

    return (
        <>
            <div className='landing'>
                <div className='landing--about'>
                    <h2>Welcome to Garden Share!</h2>
                    <p>
                        There are other benefits as well that come with this
                        style of living. If everyone gets fresh produce and
                        baked goods from each other, their health will rise and
                        the neighborhood will be happy and productive. Other,
                        less handy neighbors, will save money on buying power
                        tools or machines for themselves because they barter
                        with another person to build things. That same neighbor
                        that spends money on tools or machines doesn’t have to
                        spend money on food or household items and saves money
                        as well. There is no reason why a cul-de-sac of
                        twenty-five people should own twenty-five lawn mowers
                        when there are only ten acres shared among them. One or
                        two people could easily handle that amount of grass and
                        profit from the service while the others never have to
                        spend the money on the machine, upkeep, and gas. This
                        also cuts down the amount of pollution, noise, and
                        general irritation that comes from owning mechanical
                        things. If neighborhoods really wanted to be extreme,
                        they could designate skills to the people who do those
                        best and share the cost and profit equally without the
                        need for constant bargaining. This may sound farfetched,
                        but in a community of respectful and friendly neighbors,
                        it should be easily possible.
                    </p>
                    <p
                        id='login'
                        onClick={handleClick}
                        className='landing--about--auth-links'>
                        Log In
                    </p>
                    <p
                        id='signup'
                        onClick={handleClick}
                        className='landing--about--auth-links'>
                        Sign Up
                    </p>
                </div>
            </div>
            {!showModal ? null : (
                <Modal
                    componentToRender={
                        isLoginOrSignup ? <LoginForm /> : <SignUpForm />
                    }
                    handleClick={handleClick}
                />
            )}
        </>
    );
}
