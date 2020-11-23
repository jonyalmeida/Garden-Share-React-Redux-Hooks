import React, { useState } from "react";

import Trade from "./features/Trade";
import Offer from "./features/Offer";
import Profile from "./features/profile/Profile";
import Messages from "./features/Messages";

export default function Home({ user }) {
    const [homeNav, setHomeNav] = useState("profile");

    const navClick = (e) => {
        switch (e.target.id) {
            case "trade":
                setHomeNav("trade");
                break;
            case "offer":
                setHomeNav("offer");
                break;
            case "profile":
                setHomeNav("profile");
                break;
            default:
                setHomeNav("offer");
                break;
        }
        document.querySelectorAll(".home--tabs-tab").forEach((item) => {
            if (item.id !== e.target.id) {
                item.classList.add("not-selected");
                item.classList.remove("selected");
            } else {
                item.classList.remove("not-selected");
                item.classList.add("selected");
            }
        });
    };

    return (
        <>
            <div className='home'>
                <div className='home--tabs'>
                    <div
                        onClick={navClick}
                        id='profile'
                        className='home--tabs-tab selected'>
                        my Garden
                    </div>
                    <div
                        onClick={navClick}
                        id='trade'
                        className='home--tabs-tab not-selected'>
                        Trade
                    </div>
                    <div
                        onClick={navClick}
                        id='offer'
                        className='home--tabs-tab not-selected'>
                        Offer
                    </div>
                </div>
                <div className='home--content'>
                    {homeNav === "trade" ? (
                        <Trade />
                    ) : homeNav === "offer" ? (
                        <Offer />
                    ) : (
                        <Profile user={user} />
                    )}
                </div>
            </div>
        </>
    );
}
