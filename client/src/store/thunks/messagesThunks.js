import Cookies from "js-cookie";

import {
    setMessages,
    createMessage,
    deleteMsg,
} from "../actions/messagesActions";

export function fetchMessages(currentUserId) {
    return async (dispatch) => {
        const res = await fetch(`/api/users/${currentUserId}/messages/`);
        const { messages } = await res.json();
        if (res.ok) {
            dispatch(setMessages(messages));
        }
        // console.log('data reducer', data.messages);
        return res;
    };
}

export function postMessage(currentUserId, msg, receiverId, goodsId) {
    return async (dispatch) => {
        console.log(currentUserId, msg, receiverId, goodsId);
        const res = await fetch(`/api/users/${currentUserId}/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ msg, receiverId, goodsId }),
        });

        const { sentMessage } = await res.json();
        if (res.ok) {
            dispatch(createMessage(sentMessage));
        }
        console.log("create msg reducer", sentMessage);
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
        console.log("delete msg reducer");
        return res;
    };
}
