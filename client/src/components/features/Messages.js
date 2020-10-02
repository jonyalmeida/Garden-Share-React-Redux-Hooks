import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postMessage, fetchMessages } from '../../store/messages';

export default function Messages() {
    const currentUserId = useSelector(state => state.auth.id);
    const messages = useSelector(state => state.msgs);

    const dispatch = useDispatch();

    // let [state, setState] = useState('');
    // state = { value: '' };

    // const { value } = state;

    useEffect(() => {
        dispatch(fetchMessages(currentUserId));
    }, [dispatch, currentUserId]);

    const replyMsg = async (message, receiverId) => {
        dispatch(postMessage(currentUserId, message, receiverId));
    };

    const deleteMsg = () => { }

    const onChangeHandler = (e, receiverId) => {
        //     setState({ ...state, [e.target.name]: e.target.value });
    }

    console.log(messages);

    return (
        <>
            <div>
                <h1>Messages Received</h1>
                <ul>
                    {messages.filter(msg => currentUserId === msg.receiverId).map(msg => <li key={msg.id}>
                        <span><h3>Message from {msg.User.firstName} {msg.User.lastName}</h3>
                            {msg.message}</span>
                        <span><button onClick={replyMsg}>REPLY</button></span>
                        <span><button onClick={deleteMsg}>DELETE</button></span>
                        <form>
                            <input
                                type='text'
                                name={`reply-${msg.senderId}`}
                                value=''
                                onChange={(e) => onChangeHandler(msg.senderId)} />
                            <button type='submit'>Send message</button>
                        </form>
                    </li>)}
                </ul>
            </div>
            <div>
                <h1>Messages Sent</h1>
                <ul>
                    {messages.filter(msg => currentUserId === msg.senderId).map(msg => <li key={msg.id}>
                        <span><h3>Message to {msg.User.firstName} {msg.User.lastName}</h3>
                            {msg.message}</span>
                        <span><button onClick={deleteMsg}>DELETE</button></span>
                    </li>)}
                </ul>
            </div>
        </>
    );
}
