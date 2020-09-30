import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function Messages() {
    const currentUserId = useSelector(state => state.auth.id);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(`/api/users/${currentUserId}/messages/`);
            const responseData = await response.json();
            console.log(responseData);
        }
        fetchData();
    }, []);

    // const userComponents = .map((user) => <User key={user.id} user={user} />)
    return (
        <>
            <h1>Messages </h1>
        </>
    );
}
