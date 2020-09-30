import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        user,
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

export function login(email, password) {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ email, password }),
        });
        res.data = await res.json(); // { user: { ... }}
        if (res.ok) {
            dispatch(setUser(res.data));
        }
        return res;
    };
};

export function logout() {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
        });
        console.log(res.cookies)
        if (res.ok) {
            dispatch(removeUser());
        }
    };
}

// export function loadUser() {
//     const authToken = Cookies.get("token");
//     if (authToken) {
//         try {
//             const payload = authToken.split(".")[1];
//             const decodedPayload = atob(payload);
//             const payloadObj = JSON.parse(decodedPayload);
//             const { data } = payloadObj;
//             return data;
//         } catch (e) {
//             Cookies.remove("token");
//         }
//     }
//     return {};
// }

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
};
