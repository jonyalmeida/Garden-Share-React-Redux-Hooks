const SET_MESSAGES = 'messages/SET_MESSAGES';

export const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages,
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

export default function messagesReducer(state = [], action) {
    switch (action.type) {
        case SET_MESSAGES:
            return action.messages;
        default:
            return state;
    }
};
