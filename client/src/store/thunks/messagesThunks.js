import Cookies from "js-cookie";

import {
    setMessages,
    createMessage,
    deleteMsg,
} from "../actions/messagesActions";

export function fetchMessages(userId) {
    return async (dispatch) => {
        const response = await fetch("/api/users/messages", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ userId: userId }),
        });
        const { messages } = await response.json();
        if (response.ok) {
            dispatch(setMessages(messages));
        }
        return response;
    };
}

export function postMessage(senderId, msg, receiverId, goodsId) {
    return async (dispatch) => {
        const res = await fetch(`/api/users/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ msg, senderId, receiverId, goodsId }),
        });

        const { sentMessage } = await res.json();
        if (res.ok) {
            dispatch(createMessage(sentMessage));
        }
        return res;
    };
}

export function deleteMessage(msgId) {
    return async (dispatch) => {
        const res = await fetch(`/api/users/msgs/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ msgId }),
        });

        if (res.ok) {
            dispatch(deleteMsg(msgId));
        }
        return res;
    };
}
