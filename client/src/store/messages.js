import Cookies from 'js-cookie';

const SET_MESSAGES = 'messages/SET_MESSAGES';
const CREATE_MESSAGE = 'messages/CREATE_MESSAGE';
const DELETE_MESSAGE = 'messages/DELETE_MESSAGE';

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

export const deleteMsg = (msgId) => {
    return {
        type: DELETE_MESSAGE,
        msgId
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

export function postMessage(currentUserId, msg, receiverId, goodsId) {
    return async dispatch => {
        console.log(currentUserId, msg, receiverId, goodsId);
        const res = await fetch(`/api/users/${currentUserId}/messages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ msg, receiverId, goodsId }),
        });

        const { sentMessage } = await res.json();
        if (res.ok) {
            dispatch(createMessage(sentMessage));
        }
        console.log('create msg reducer', sentMessage);
        return res;
    };
};

export function deleteMessage(msgId) {
    return async dispatch => {
        const res = await fetch(`/api/users/msgs/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            },
            body: JSON.stringify({ msgId }),
        });

        if (res.ok) {
            dispatch(deleteMsg(msgId));
        }
        console.log('delete msg reducer');
        return res;
    };
};

export default function messagesReducer(state = [], action) {
    const newState = state.slice();
    switch (action.type) {
        case SET_MESSAGES:
            return action.messages;
        case CREATE_MESSAGE:
            newState.push(action.message);
            return newState;
        case DELETE_MESSAGE:
            newState.forEach((msg, idx) => {
                if (msg.id === action.msgId) {
                    newState.splice(idx, 1);
                }
            })
            return newState;
        default:
            return state;
    }
};
