import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Message from "./Message";

import { fetchMessages } from "../../../store/thunks/messagesThunks";

export default function Messages({ user }) {
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.msgs);

    useEffect(() => {
        if (messages.length === 0) {
            dispatch(fetchMessages(user.id));
        }
    }, [dispatch, messages.length, user.id]);
    return (
        <div>
            <div>
                <h2>Messages sent:</h2>
                {messages
                    .filter((item) => item.senderId === 1)
                    .map((item, idx) => (
                        <Message key={idx} item={item} user={user} />
                    ))}
            </div>
            <div>
                <h2>Messages received:</h2>
                {messages
                    .filter((item) => item.receiverId === 1)
                    .map((item, idx) => (
                        <Message key={idx} item={item} />
                    ))}
            </div>
        </div>
    );
}
