import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postMessage, deleteMessage } from '../../store/messages';

export default function LiMessagesReceived({ message, firstName, lastName, msgId, currentUserId, senderId, goodsId }) {

    const dispatch = useDispatch();

    const [messageText, setMessageText] = useState('Type in your message her.');

    const replyMsg = async () => {
        dispatch(postMessage(currentUserId, messageText, senderId, goodsId));
    };

    const deleteMsg = () => {
        dispatch(deleteMessage(msgId));
    }

    return (
        <li >
            <span><h3>Message from {firstName} {lastName}</h3>
                {message}</span>
            <span><button onClick={replyMsg}>REPLY</button></span>
            <span><button onClick={deleteMsg}>DELETE</button></span>
            <form>
                <input
                    type='text'
                    name={`reply-${senderId}`}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)} />
                <button type='submit'>Send message</button>
            </form>
        </li>
    );
}