import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteMessage } from '../../store/messages';

export default function LiMessagesSent({ message, firstName, lastName, msgId }) {

    const dispatch = useDispatch();

    const deleteMsg = () => {
        console.log(msgId)
        dispatch(deleteMessage(msgId));
    }

    return (
        <li>
            <span><h3>Message to {firstName} {lastName}</h3>
                {message}</span>
            <span><button onClick={deleteMsg}>DELETE</button></span>
        </li>
    );
}