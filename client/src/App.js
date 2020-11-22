import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { restoreSession } from "./store/thunks/authThunks";

import Landing from "./components/Landing";

function App() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(restoreSession());
    }, [dispatch]);

    return (
        <>
            <Landing />
        </>
    );
}

export default App;
