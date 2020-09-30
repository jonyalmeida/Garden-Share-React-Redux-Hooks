import React from 'react';

import Messages from '../components/features/Messages';
import ListOfGoods from '../components/features/ListOfGoods';

export default function HomePage() {


    return (
        <>
            <h1>Hello homepage!</h1>
            <Messages />
            <ListOfGoods />
        </>
    )
}