import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { restoreSession } from "./store/thunks/authThunks";
import { setPage } from "./store/actions/navActions";

import Landing from "./components/Landing";
import Home from "./components/Home";
import Logout from "./components/sessions/Logout";

function App() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth);
    const view = useSelector((state) => state.nav.nav);

    useEffect(() => {
        dispatch(restoreSession());
        dispatch(setPage("landing"));
    }, [dispatch]);

    if (user.id) dispatch(setPage("home"));

    return (
        <>
            {user.id && <Logout />}
            {view === "home" ? (
                <Home />
            ) : view === "landing" ? (
                <Landing />
            ) : null}
        </>
    );
}

export default App;
