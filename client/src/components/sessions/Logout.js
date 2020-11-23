import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../store/thunks/authThunks";
import { setPage } from "../../store/actions/navActions";

export default function LogoutUser() {
    const dispatch = useDispatch();

    const logoutClick = async () => {
        await dispatch(logout());
        dispatch(setPage("landing"));
    };

    return (
        <div className='logout'>
            <p className='auth-link' onClick={logoutClick}>
                Logout
            </p>
        </div>
    );
}
