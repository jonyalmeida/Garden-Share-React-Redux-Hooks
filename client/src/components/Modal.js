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
        cursor: "pointer",
    },
};

export default function Modal({ componentToRender, closeModal }) {
    const [inProp, setInProp] = useState(false);
    setTimeout(() => {
        setInProp(true);
    }, 0);

    const closeModalOnClick = (e) => {
        if (
            e.target.id === "backdrop-area" ||
            e.target.id === "close-modal-x"
        ) {
            closeModal(false);
        }
        return;
    };
    return (
        <div
            id='backdrop-area'
            className='modal--backdrop'
            onClick={closeModalOnClick}
            style={css.modalBackdrop}>
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames='alert'
                unmountOnExit>
                <div className='modal--content'>
                    <p
                        id='close-modal-x'
                        style={css.closeModal}
                        onClick={closeModalOnClick}>
                        X
                    </p>
                    {componentToRender}
                </div>
            </CSSTransition>
        </div>
    );
}
