import React, { useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

/* --- Modal CSS --- */
const css = {
    modalBackdrop: {
        width: "200vh",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: "200",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    closeModal: {
        fontSize: "2em",
        justifySelf: "flex-end",
        alignSelf: "start",
    },
};

export default function Modal({ componentToRender }) {
    const [inProp, setInProp] = useState(false);
    setTimeout(() => {
        setInProp(true);
    }, 0);

    return (
        <div className='modal--backdrop' style={css.modalBackdrop}>
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames='alert'
                unmountOnExit>
                <div className='modal--content'>
                    <p style={css.closeModal}>X</p>
                    {componentToRender}
                </div>
            </CSSTransition>
        </div>
    );
}
