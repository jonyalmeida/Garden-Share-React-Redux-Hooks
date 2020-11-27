import Cookies from "js-cookie";

import { setUser, removeUser } from "../actions/authActions";

export function restoreSession() {
    return async (dispatch) => {
        //enter the back end route to get the current user
        const response = await fetch("/api/session");
        const data = await response.json(); //current user info
        if (response.ok) {
            dispatch(setUser(data.user));
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
            return "ok";
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
        if (res.ok) {
            dispatch(removeUser());
            return "ok";
        }
    };
}
