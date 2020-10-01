import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMessages } from '../../store/messages';

export default function Messages() {
    const currentUserId = useSelector(state => state.auth.id);
    const messages = useSelector(state => state.msgs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages(currentUserId));
        console.log('1')
    }, [dispatch, currentUserId]);

    console.log(messages)

    return (
        <>
            <h1>Messages</h1>
            <ul>
                {messages.map(msg => <li key={msg.id}>
                    <h3>Message from {msg.User.firstName} {msg.User.lastName}</h3>
                    {msg.message}</li>)}
            </ul>
        </>
    );
}
