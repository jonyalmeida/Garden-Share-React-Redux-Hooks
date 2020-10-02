import Cookies from 'js-cookie';

const SET_MESSAGES = 'messages/SET_MESSAGES';
const CREATE_MESSAGE = 'messages/CREATE_MESSAGE'

export const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages,
    };
};

export const createMessage = (message) => {
    return {
        type: CREATE_MESSAGE,
        message,
    };
};

export function fetchMessages(currentUserId) {
    return async dispatch => {
        const res = await fetch(`/api/users/${currentUserId}/messages/`);
        const { messages } = await res.json();
        if (res.ok) {
            dispatch(setMessages(messages));
        }
        // console.log('data reducer', data.messages);
        return res;
    };
};

export function postMessage(currentUserId, message, receiverId) {
    return async dispatch => {
        const res = await fetch(`/api/users/${currentUserId}/messages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ message, receiverId }),
        });

        const { message } = await res.json();
        if (res.ok) {
            dispatch(createMessage(message));
        }
        console.log('create msg reducer', message);
        return res;
    };
};

export default function messagesReducer(state = [], action) {
    switch (action.type) {
        case SET_MESSAGES:
            return action.messages;
        case CREATE_MESSAGE:
            const newState = state.slice;
            newState.push(action.message);
            return newState;
        default:
            return state;
    }
};
