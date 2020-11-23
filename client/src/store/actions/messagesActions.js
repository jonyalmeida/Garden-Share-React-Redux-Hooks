export const SET_MESSAGES = "messages/SET_MESSAGES";
export const CREATE_MESSAGE = "messages/CREATE_MESSAGE";
export const DELETE_MESSAGE = "messages/DELETE_MESSAGE";

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
        msgId,
    };
};
