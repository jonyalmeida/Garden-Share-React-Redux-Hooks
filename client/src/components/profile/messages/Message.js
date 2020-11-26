import React from "react";
import { useSelector } from "react-redux";

export default function Message({ item }) {
    const user = useSelector((state) => state.auth);

    const senderId = item.receiverId;
    const receiverId = item.senderId;
    const goodsId = item.goodsId;

    const messageReplyClick = (e) => {};

    return (
        <div className='message--container'>
            <br />
            <p>{item.message}</p>
            {user && item.receiverId === user.id ? (
                <button onClick={messageReplyClick}>Reply</button>
            ) : null}
            <br />
            <br />
        </div>
    );
}
