import React from 'react';

export default function SignUpLoginLogo() {
    return (
        <div
            style={{
                backgroundImage: `url('/images/524-5244065_drawing-vegetables-winter-vegetable-transparent-png-vegetable-garden.png')`,
                height: `100vh`,
                width: `100vw`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`
            }}>
            <h1 style={{
                position: `absolute`,
                top: '37%',
                fontFamily: `'Dancing Script', cursive`,
                fontSize: '4.5em',
                color: 'green',
                transform: `rotate(-15deg)`,
                textShadow: `1px 1px 2px yellow, 0 0 1em blue, 0 0 0.2em lightgreen`
            }}>
                Welcome to<br />Garden Share
                </h1>
        </div >
    );
}
