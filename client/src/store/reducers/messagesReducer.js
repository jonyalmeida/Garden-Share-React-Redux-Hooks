import {
    SET_MESSAGES,
    CREATE_MESSAGE,
    DELETE_MESSAGE,
} from "../actions/messagesActions";

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
            });
            return newState;
        default:
            return state;
    }
}
