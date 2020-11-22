import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "./store/auth";

import Landing from "./components/Landing";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth);

    useEffect(() => {
        (async () => {
            //enter the back end route to get the current user
            const res = await fetch("/api/session");
            if (res.ok) {
                res.data = await res.json(); //current user info
                dispatch(setUser(res.data.user));
            }
            setLoading(false);
        })();
    }, [dispatch]);

    if (loading) return null;

    return (
        <>
            <Landing />
        </>
    );
}

export default App;
