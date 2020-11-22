import Cookies from "js-cookie";

import { setUser, removeUser } from "../actions/authActions";

export function restoreSession() {
    return async (dispatch) => {
        //enter the back end route to get the current user
        const res = await fetch("/api/session");

        if (res.ok) {
            res.data = await res.json(); //current user info
            dispatch(setUser(res.data.user));
        }
    };
}

export function registerUser(
    email,
    password,
    firstName,
    lastName,
    address,
    userGeocode
) {
    return async (dispatch) => {
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({
                email,
                password,
                firstName,
                lastName,
                address,
                userGeocode,
            }),
        });
        res.data = await res.json(); // { user: { ... }}
        if (res.ok) {
            dispatch(setUser(res.data));
            dispatch(login(email, password));
        }
    };
}

export function login(email, password) {
    return async (dispatch) => {
        const res = await fetch("/api/session", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ email, password }),
        });
        const { user } = await res.json(); // { user: { ... }}
        if (res.ok) {
            dispatch(setUser(user));
        }
        return res;
    };
}

export function logout() {
    return async (dispatch) => {
        const res = await fetch("/api/session", {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
        });
        console.log(res.cookies);
        if (res.ok) {
            dispatch(removeUser());
        }
    };
}
