import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMessages } from '../../store/messages';
import LiMessagesReceived from './LiMessagesReceived';
import LiMessagesSent from './LiMessagesSent';

export default function Messages() {
    const currentUserId = useSelector(state => state.auth.id);
    const messages = useSelector(state => state.msgs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMessages(currentUserId));
    }, [dispatch, currentUserId]);

    console.log(messages);

    return (
        <>
            <div>
                <h1>Messages Received</h1>
                <ul>
                    {messages.filter(msg => currentUserId === msg.receiverId)
                        .map(msg =>
                            <LiMessagesReceived
                                key={msg.id}
                                msgId={msg.id}
                                message={msg.message}
                                firstName={msg.User.firstName}
                                lastName={msg.User.lastName}
                                currentUserId={currentUserId}
                                senderId={msg.senderId}
                                goodsId={msg.goodsId}
                            />)}
                </ul>
            </div>
            <div>
                <h1>Messages Sent</h1>
                <ul>
                    {messages.filter(msg => currentUserId === msg.senderId)
                        .map(msg => <LiMessagesSent
                            key={msg.id}
                            msgId={msg.id}
                            message={msg.message}
                            firstName={msg.User.firstName}
                            lastName={msg.User.lastName}
                        />)}
                </ul>
            </div>
        </>
    );
}
